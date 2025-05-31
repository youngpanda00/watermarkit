document.addEventListener('DOMContentLoaded', function() {
const imageInput = document.getElementById("imageInput");
const dropArea = document.getElementById("dropArea");
const watermarkInput = document.getElementById("watermarkInput");
const watermarkDrop = document.getElementById("watermarkDrop");
const imageTableBody = document.getElementById("imageTableBody");
const watermarkPreviewContainer = document.getElementById("watermarkPreviewContainer");
const progressSection = document.getElementById("progressSection");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const textWatermarkInput = document.getElementById("textWatermark");
const textColorInput = document.getElementById("textColor");
const removeAllButton = document.getElementById("removeAllButton");
const rotationSlider = document.getElementById('watermarkRotation');
const opacitySlider = document.getElementById('watermarkOpacity');
const flipHorizontalBtn = document.getElementById('flipHorizontalBtn');
const flipVerticalBtn = document.getElementById('flipVerticalBtn');
const fontSelect = document.getElementById('watermarkFont');
const maxWidthInput = document.getElementById('maxWidth');
const maxHeightInput = document.getElementById('maxHeight');
const defaultPreviewWidth = 400;
const defaultPreviewHeight = 300;

let images = [];
let watermark = null;
let previewWmRotation = 0;
let previewWmOpacity = 0.5;
let previewWmFlipH = false;
let previewWmFlipV = false;
let previewWmFont = 'Arial';

// 🖼️ IMAGE upload box (click & drag)
dropArea.addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", handleImageUpload);

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#4caf50";
});
dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = "#aaa";
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#aaa";
  handleImageUpload({ target: { files: e.dataTransfer.files } });
});

function handleImageUpload(e) {
  const files = Array.from(e.target.files).filter(file => file.type.startsWith("image/"));
  for (const file of files) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const uploadTime = new Date().toLocaleString();
      const fileSize = (file.size / 1024).toFixed(2) + " KB";
      images.push({ file, img, uploadTime, fileSize });
      renderImageTable();
    };
  }
}

// 🖼️ WATERMARK upload box (click & drag)
watermarkDrop.addEventListener("click", () => watermarkInput.click());
watermarkInput.addEventListener("change", handleWatermarkUpload);

watermarkDrop.addEventListener("dragover", (e) => {
  e.preventDefault();
  watermarkDrop.style.borderColor = "#4caf50";
});
watermarkDrop.addEventListener("dragleave", () => {
  watermarkDrop.style.borderColor = "#aaa";
});
watermarkDrop.addEventListener("drop", (e) => {
  e.preventDefault();
  watermarkDrop.style.borderColor = "#aaa";
  const file = e.dataTransfer.files[0];
  if (file) {
    handleWatermarkUpload({ target: { files: [file] } });
  }
});

function handleWatermarkUpload(e) {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      watermark = img;
      watermarkPreviewContainer.innerHTML = `
        <img id="watermarkPreview" src="${img.src}" alt="Watermark Preview" />
      `;
      // Show the X button
      document.getElementById("removeWatermarkBtn").classList.add("visible");
      // 🔽 Hide the prompt
      const prompt = document.getElementById("watermarkPrompt");
      if (prompt) prompt.style.display = "none";
      toggleWatermarkOptions("image");
      updateStepperButtons();
    };
  } else {
    alert("Please upload a valid image watermark.");
  }
}

function removeWatermark() {
  watermark = null;
  watermarkInput.value = "";
  watermarkPreviewContainer.innerHTML = "";
  // Hide the X button
  document.getElementById("removeWatermarkBtn").classList.remove("visible");
  const prompt = document.getElementById("watermarkPrompt");
  if (prompt) {
    prompt.style.display = "block";
    prompt.innerText = "🖋️ Drag your watermark PNG here or click to upload"; // Restore default prompt
  }
  textWatermarkInput.disabled = false;
  textWatermarkInput.style.backgroundColor = "#ffffff";
  textColorInput.disabled = false;
  textColorInput.style.backgroundColor = "#ffffff";
  watermarkInput.disabled = false;
  watermarkInput.style.backgroundColor = "#ffffff";
  watermarkDrop.style.backgroundColor = "#ffffff";
}


// 📝 Text watermark handler
textWatermarkInput.addEventListener("input", () => {
  if (textWatermarkInput.value.trim()) {
    toggleWatermarkOptions("text");
  } else {
    toggleWatermarkOptions("none");
  }
});

// Toggle watermark options (enable/disable)
function toggleWatermarkOptions(type) {
  if (type === "image") {
    textWatermarkInput.disabled = true;
    textWatermarkInput.style.backgroundColor = "#e0e0e0";
    textColorInput.disabled = true;
    textColorInput.style.backgroundColor = "#e0e0e0";
  } else if (type === "text") {
    watermarkInput.disabled = true;
    watermarkInput.style.backgroundColor = "#e0e0e0";
    watermarkDrop.style.backgroundColor = "#e0e0e0";
  } else {
    // no watermark selected
    textWatermarkInput.disabled = false;
    textWatermarkInput.style.backgroundColor = "#ffffff";
    textColorInput.disabled = false;
    textColorInput.style.backgroundColor = "#ffffff";
    watermarkInput.disabled = false;
    watermarkInput.style.backgroundColor = "#ffffff";
    watermarkDrop.style.backgroundColor = "#ffffff";
  }
}

// Render images in the table
function renderImageTable() {
  imageTableBody.innerHTML = "";
  const lang = localStorage.getItem('lang') || 'en';
  const translations = window.translations || {};
  const t = translations[lang] || translations['en'] || { remove: 'Remove' };
  images.forEach((img, index) => {
    const row = document.createElement("tr");
    const removeButton = document.createElement("button");
    removeButton.textContent = t.remove;
    removeButton.setAttribute('data-translate', 'remove');
    removeButton.onclick = () => removeImage(index);
    
    row.innerHTML = `
      <td>${img.file.name}</td>
      <td>${img.fileSize}</td>
      <td>${img.uploadTime}</td>
      <td></td>
    `;
    row.querySelector('td:last-child').appendChild(removeButton);
    imageTableBody.appendChild(row);
  });

  // Enable or disable "Remove All" button based on images array
  removeAllButton.disabled = images.length === 0;

  // Show or hide the table container
  document.getElementById("imageList").style.display = images.length > 0 ? "block" : "none";
}


// Remove image from list
function removeImage(index) {
  images.splice(index, 1);  // Remove image from the array
  renderImageTable();  // Re-render the table
  imageInput.value = "";  // Reset the file input to allow re-upload of the same file
  drawPreviewCanvas();  // Update the preview canvas
  updateStepperButtons();  // Update the stepper buttons state
}

// 🖼️ "Remove All" functionality
removeAllButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to remove all images?")) {
    images = [];  // Clear the images array
    renderImageTable();  // Re-render the table
    imageInput.value = "";  // Reset the file input to allow re-upload of the same file
  }
});


// Export images with correct dimensions and scaling logic
async function exportImages() {
  if (images.length === 0) {
    alert("Please upload images first!");
    return;
  }

  const zip = new JSZip();
  progressSection.style.display = "block";
  progressBar.style.width = "0%";
  progressText.innerText = "Starting...";

  const maxWidth = parseInt(document.getElementById("maxWidth").value) || null;
  const maxHeight = parseInt(document.getElementById("maxHeight").value) || null;

  // Check if the input dimensions are valid
  if ((maxWidth && !maxHeight) || (!maxWidth && maxHeight)) {
    alert("Please enter both width and height for custom resizing, or leave both blank to use the original size.");
    return;
  }
  
  if ((maxWidth && maxWidth <= 0) || (maxHeight && maxHeight <= 0)) {
    alert("Width and height must be positive numbers.");
    return;
  }
  

  for (let i = 0; i < images.length; i++) {
    const { file, img } = images[i];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let width = img.width;
    let height = img.height;

    // Handle Image Resizing Based on Input Dimensions
    if (maxWidth && maxHeight) {
      if (width > height) {
        let scaleFactor = maxWidth / width;
        let newHeight = height * scaleFactor;
        if (newHeight < maxHeight) {
          scaleFactor = maxHeight / height;
          width = width * scaleFactor;
          height = maxHeight;
        } else {
          height = newHeight;
          width = maxWidth;
        }
      } else if (height > width) {
        let scaleFactor = maxHeight / height;
        let newWidth = width * scaleFactor;
        if (newWidth < maxWidth) {
          scaleFactor = maxWidth / width;
          height = height * scaleFactor;
          width = maxWidth;
        } else {
          width = newWidth;
          height = maxHeight;
        }
      } else {
        if (maxWidth >= maxHeight) {
          let scaleFactor = maxWidth / width;
          width = maxWidth;
          height = height * scaleFactor;
        } else {
          let scaleFactor = maxHeight / height;
          height = maxHeight;
          width = width * scaleFactor;
        }
      }
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      const offsetX = (maxWidth - width) / 2;
      const offsetY = (maxHeight - height) / 2;
      ctx.drawImage(img, offsetX, offsetY, width, height);
    } else {
      if (maxWidth) {
        const scaleFactor = maxWidth / width;
        width = maxWidth;
        height = height * scaleFactor;
      } else if (maxHeight) {
        const scaleFactor = maxHeight / height;
        height = maxHeight;
        width = width * scaleFactor;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
    }
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // --- Use preview position, scale, rotation, and opacity for watermark ---
    const wmCenterX = canvasWidth * (previewWmX / previewCanvas.width);
    const wmCenterY = canvasHeight * (previewWmY / previewCanvas.height);
    const scaleFactor = canvasWidth / previewCanvas.width;
    const wmScale = previewWmScale * scaleFactor;
    const wmRotation = previewWmRotation;
    const wmOpacity = previewWmOpacity;

    if (watermark) {
      const wmW = watermark.width * wmScale;
      const wmH = watermark.height * wmScale;
      ctx.save();
      ctx.translate(wmCenterX, wmCenterY);
      ctx.rotate((wmRotation * Math.PI) / 180);
      ctx.scale(previewWmFlipH ? -1 : 1, previewWmFlipV ? -1 : 1);
      ctx.globalAlpha = wmOpacity;
      ctx.drawImage(watermark, -wmW/2, -wmH/2, wmW, wmH);
      ctx.globalAlpha = 1.0;
      ctx.restore();
    } else if (textWatermarkInput.value.trim()) {
      ctx.save();
      ctx.translate(wmCenterX, wmCenterY);
      ctx.rotate((wmRotation * Math.PI) / 180);
      ctx.scale(previewWmFlipH ? -1 : 1, previewWmFlipV ? -1 : 1);
      ctx.globalAlpha = wmOpacity;
      ctx.font = `${Math.round(32 * wmScale)}px ${previewWmFont}`;
      ctx.fillStyle = textColorInput.value;
      ctx.textAlign = "center";
      const lines = textWatermarkInput.value.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, 0, i * 36 * wmScale);
      });
      ctx.globalAlpha = 1.0;
      ctx.restore();
    }
    // --- End preview position/scale/rotation/opacity logic ---

    // Convert canvas to blob for zipping
    const blob = await new Promise(resolve => canvas.toBlob(resolve));
    zip.file(file.name, blob);

    // Update progress bar
    const progressPercent = Math.round(((i + 1) / images.length) * 100);
    progressBar.style.width = `${progressPercent}%`;
    progressText.innerText = `Processing... (${progressPercent}%)`;
  }

  // Generate the zip file and prompt download
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "watermarked_images.zip");

  progressText.innerText = "✅ Done!";
}
window.exportImages = exportImages;

// Wrap the text to fit within the max width
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const testWidth = ctx.measureText(testLine).width;

    if (testWidth > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

// --- Watermark Preview & Adjust Section ---
const previewCanvas = document.getElementById('watermarkPreviewCanvas');
const previewCtx = previewCanvas.getContext('2d');
const scaleSlider = document.getElementById('watermarkScale');

let previewWmX = 200; // center default
let previewWmY = 150;
let previewWmScale = 1;
let isDraggingWm = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function drawPreviewCanvas() {
  // Draw background (plain color or first uploaded image)
  previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  if (images.length > 0) {
    const img = images[0].img;
    let width = img.width;
    let height = img.height;
    const maxWidth = previewCanvas.width;
    const maxHeight = previewCanvas.height;
    // Use the same resizing logic as exportImages
    if (maxWidth && maxHeight) {
      if (width > height) {
        let scaleFactor = maxWidth / width;
        let newHeight = height * scaleFactor;
        if (newHeight < maxHeight) {
          scaleFactor = maxHeight / height;
          width = width * scaleFactor;
          height = maxHeight;
        } else {
          height = newHeight;
          width = maxWidth;
        }
      } else if (height > width) {
        let scaleFactor = maxHeight / height;
        let newWidth = width * scaleFactor;
        if (newWidth < maxWidth) {
          scaleFactor = maxWidth / width;
          height = height * scaleFactor;
          width = maxWidth;
        } else {
          width = newWidth;
          height = maxHeight;
        }
      } else {
        if (maxWidth >= maxHeight) {
          let scaleFactor = maxWidth / width;
          width = maxWidth;
          height = height * scaleFactor;
        } else {
          let scaleFactor = maxHeight / height;
          height = maxHeight;
          width = width * scaleFactor;
        }
      }
      // Center the image
      const offsetX = (maxWidth - width) / 2;
      const offsetY = (maxHeight - height) / 2;
      previewCtx.fillStyle = '#e5e7eb';
      previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
      previewCtx.drawImage(img, offsetX, offsetY, width, height);
    } else {
      // Only one dimension is provided (either maxWidth or maxHeight)
      if (maxWidth) {
        const scaleFactor = maxWidth / width;
        width = maxWidth;
        height = height * scaleFactor;
      } else if (maxHeight) {
        const scaleFactor = maxHeight / height;
        height = maxHeight;
        width = width * scaleFactor;
      }
      // Center the image
      const offsetX = (previewCanvas.width - width) / 2;
      const offsetY = (previewCanvas.height - height) / 2;
      previewCtx.fillStyle = '#e5e7eb';
      previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
      previewCtx.drawImage(img, offsetX, offsetY, width, height);
    }
  } else {
    previewCtx.fillStyle = '#e5e7eb';
    previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
  }

  // Draw watermark (image or text)
  previewCtx.save();
  previewCtx.translate(previewWmX, previewWmY);
  previewCtx.rotate((previewWmRotation * Math.PI) / 180);
  previewCtx.globalAlpha = previewWmOpacity;
  if (watermark) {
    const wmW = watermark.width * previewWmScale;
    const wmH = watermark.height * previewWmScale;
    previewCtx.scale(previewWmFlipH ? -1 : 1, previewWmFlipV ? -1 : 1);
    previewCtx.drawImage(watermark, -wmW/2, -wmH/2, wmW, wmH);
  } else if (textWatermarkInput.value.trim()) {
    const text = textWatermarkInput.value;
    previewCtx.scale(previewWmFlipH ? -1 : 1, previewWmFlipV ? -1 : 1);
    previewCtx.font = `${Math.round(32 * previewWmScale)}px ${previewWmFont}`;
    previewCtx.fillStyle = textColorInput.value;
    previewCtx.textAlign = 'center';
    // Support multi-line text
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      previewCtx.fillText(line, 0, i * 36 * previewWmScale);
    });
  }
  previewCtx.globalAlpha = 1.0;
  previewCtx.restore();
}

// Drag logic
previewCanvas.addEventListener('mousedown', function(e) {
  const rect = previewCanvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  // Check if mouse is over watermark
  let over = false;
  if (watermark) {
    const wmW = watermark.width * previewWmScale;
    const wmH = watermark.height * previewWmScale;
    over = mouseX >= (previewWmX - wmW/2) && mouseX <= (previewWmX + wmW/2) && mouseY >= (previewWmY - wmH/2) && mouseY <= (previewWmY + wmH/2);
  } else if (textWatermarkInput.value.trim()) {
    // Use a bounding box for text
    const text = textWatermarkInput.value;
    previewCtx.font = `${Math.round(32 * previewWmScale)}px Arial`;
    const textW = previewCtx.measureText(text).width;
    const textH = 36 * previewWmScale;
    over = mouseX >= (previewWmX - textW/2) && mouseX <= (previewWmX + textW/2) && mouseY >= (previewWmY - textH/2) && mouseY <= (previewWmY + textH/2);
  }
  if (over) {
    isDraggingWm = true;
    dragOffsetX = mouseX - previewWmX;
    dragOffsetY = mouseY - previewWmY;
  }
});
window.addEventListener('mousemove', function(e) {
  if (!isDraggingWm) return;
  const rect = previewCanvas.getBoundingClientRect();
  previewWmX = e.clientX - rect.left - dragOffsetX;
  previewWmY = e.clientY - rect.top - dragOffsetY;
  drawPreviewCanvas();
});
window.addEventListener('mouseup', function() {
  isDraggingWm = false;
});

// Scale logic
scaleSlider.addEventListener('input', function() {
  previewWmScale = parseFloat(this.value);
  drawPreviewCanvas();
});

// Redraw preview when watermark, text, color, or images change
[textWatermarkInput, textColorInput].forEach(input => {
  input.addEventListener('input', drawPreviewCanvas);
});

// Redraw on watermark upload
const origHandleWatermarkUpload = handleWatermarkUpload;
handleWatermarkUpload = function(e) {
  origHandleWatermarkUpload(e);
  previewWmScale = 1;
  previewWmX = previewCanvas.width / 2;
  previewWmY = previewCanvas.height / 2;
  drawPreviewCanvas();
}

// Redraw on image upload
const origHandleImageUpload = handleImageUpload;
handleImageUpload = function(e) {
  origHandleImageUpload(e);
  drawPreviewCanvas();
}

// Redraw on remove watermark
const origRemoveWatermark = removeWatermark;
removeWatermark = function() {
  origRemoveWatermark();
  drawPreviewCanvas();
}

// Redraw on remove all images
const origRemoveAllImages = window.removeAllImages;
window.removeAllImages = function(e) {
  if (origRemoveAllImages) origRemoveAllImages(e);
  drawPreviewCanvas();
}

rotationSlider.addEventListener('input', function() {
  previewWmRotation = parseFloat(this.value);
  drawPreviewCanvas();
});
opacitySlider.addEventListener('input', function() {
  previewWmOpacity = parseFloat(this.value);
  drawPreviewCanvas();
});

flipHorizontalBtn.addEventListener('click', function() {
  previewWmFlipH = !previewWmFlipH;
  drawPreviewCanvas();
});
flipVerticalBtn.addEventListener('click', function() {
  previewWmFlipV = !previewWmFlipV;
  drawPreviewCanvas();
});
fontSelect.addEventListener('change', function() {
  previewWmFont = this.value;
  drawPreviewCanvas();
});

function updatePreviewCanvasSize() {
  const w = parseInt(maxWidthInput.value);
  const h = parseInt(maxHeightInput.value);
  if (w > 0 && h > 0) {
    previewCanvas.width = w;
    previewCanvas.height = h;
  } else {
    previewCanvas.width = defaultPreviewWidth;
    previewCanvas.height = defaultPreviewHeight;
  }
  // Recenter watermark
  previewWmX = previewCanvas.width / 2;
  previewWmY = previewCanvas.height / 2;
  drawPreviewCanvas();
}
maxWidthInput.addEventListener('input', updatePreviewCanvasSize);
maxHeightInput.addEventListener('input', updatePreviewCanvasSize);
// Call once on load
updatePreviewCanvasSize();

drawPreviewCanvas();

// --- Stepper Navigation Logic ---
const stepContents = [
  document.getElementById('step-1'),
  document.getElementById('step-2'),
  document.getElementById('step-3')
];
const steppers = [
  document.getElementById('stepper-1'),
  document.getElementById('stepper-2'),
  document.getElementById('stepper-3')
];
let currentStep = 0;

function showStep(idx) {
  stepContents.forEach((el, i) => {
    el.classList.toggle('active', i === idx);
    steppers[i].classList.toggle('active', i === idx);
  });
  currentStep = idx;
  if (idx === 2) {
    drawPreviewCanvas();
  }
}

// Navigation buttons
const nextToStep2 = document.getElementById('nextToStep2');
const nextToStep3 = document.getElementById('nextToStep3');
const backToStep1 = document.getElementById('backToStep1');
const backToStep2 = document.getElementById('backToStep2');

nextToStep2.addEventListener('click', () => showStep(1));
nextToStep3.addEventListener('click', () => showStep(2));
backToStep1.addEventListener('click', () => showStep(0));
backToStep2.addEventListener('click', () => showStep(1));

// Enable/disable Next buttons based on requirements
function updateStepperButtons() {
  // Step 1: Next enabled if images.length > 0
  nextToStep2.disabled = images.length === 0;
  // Step 2: Next enabled if watermark image or text present
  nextToStep3.disabled = !(watermark || textWatermarkInput.value.trim());
}

// Hook into image and watermark upload logic
const origRenderImageTable = renderImageTable;
renderImageTable = function() {
  origRenderImageTable();
  updateStepperButtons();
}
const origHandleWatermarkUploadStepper = handleWatermarkUpload;
handleWatermarkUpload = function(e) {
  origHandleWatermarkUploadStepper(e);
  updateStepperButtons();
}
textWatermarkInput.addEventListener('input', updateStepperButtons);

// On remove watermark
const origRemoveWatermarkStepper = removeWatermark;
removeWatermark = function() {
  origRemoveWatermarkStepper();
  updateStepperButtons();
}
// On remove all images
const origRemoveAllImagesStepper = window.removeAllImages;
window.removeAllImages = function(e) {
  if (origRemoveAllImagesStepper) origRemoveAllImagesStepper(e);
  updateStepperButtons();
}

// Show first step on load
showStep(0);
updateStepperButtons();
});
