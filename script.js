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

let images = [];
let watermark = null;

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
        <p>✅ Watermark uploaded: ${file.name}</p>
        <img id="watermarkPreview" src="${img.src}" alt="Watermark Preview" />
        <button onclick="removeWatermark()">❌ Remove Watermark</button>
      `;
      
      // 🔽 Hide the prompt
      const prompt = document.getElementById("watermarkPrompt");
      if (prompt) prompt.style.display = "none";
      
      toggleWatermarkOptions("image");
    };
  } else {
    alert("Please upload a valid image watermark.");
  }
}

function removeWatermark() {
  watermark = null;
  watermarkInput.value = "";
  watermarkPreviewContainer.innerHTML = "";

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
  images.forEach((img, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${img.file.name}</td>
      <td>${img.fileSize}</td>
      <td>${img.uploadTime}</td>
      <td><button onclick="removeImage(${index})">Remove</button></td>
    `;
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
        // Horizontal Rectangle Image Logic
        let scaleFactor = maxWidth / width;
        let newHeight = height * scaleFactor;

        if (newHeight < maxHeight) {
          // After scaling, the height is smaller than the input height, so scale by height
          scaleFactor = maxHeight / height;
          width = width * scaleFactor;
          height = maxHeight;
        } else {
          height = newHeight;
          width = maxWidth;
        }
      } else if (height > width) {
        // Vertical Rectangle Image Logic
        let scaleFactor = maxHeight / height;
        let newWidth = width * scaleFactor;

        if (newWidth < maxWidth) {
          // After scaling, the width is smaller than the input width, so scale by width
          scaleFactor = maxWidth / width;
          height = height * scaleFactor;
          width = maxWidth;
        } else {
          width = newWidth;
          height = maxHeight;
        }
      } else {
        // Square Image Logic (Aspect ratio is 1:1)
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

      // Set canvas size based on the final calculated dimensions
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      
      // Draw the image centered within the canvas
      const offsetX = (maxWidth - width) / 2;
      const offsetY = (maxHeight - height) / 2;
      ctx.drawImage(img, offsetX, offsetY, width, height);
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

      // Set canvas size based on scaled image dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw the image to the canvas
      ctx.drawImage(img, 0, 0, width, height);
    }
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Apply watermark based on input dimensions (independent of image size)
    if (watermark) {
      const wmWidth = canvasWidth * 0.67; // Use actual final canvas size
      const wmHeight = (watermark.height / watermark.width) * wmWidth;
      const wmX = (canvasWidth - wmWidth) / 2;
      const wmY = (canvasHeight - wmHeight) / 2;
    
      ctx.globalAlpha = 0.5;
      ctx.drawImage(watermark, wmX, wmY, wmWidth, wmHeight);
      ctx.globalAlpha = 1.0;
    } else if (textWatermarkInput.value.trim()) {
      const wmWidth = canvasWidth * 0.67;
      ctx.font = `${Math.round(wmWidth / 10)}px Arial`;
      ctx.fillStyle = textColorInput.value;
      ctx.textAlign = "center";
    
      const textHeight = Math.round(wmWidth / 10);
      const lines = wrapText(ctx, textWatermarkInput.value, wmWidth);
      const textY = (canvasHeight / 2) - (lines.length * textHeight / 2) + (textHeight / 3);
    
      lines.forEach((line, index) => {
        ctx.fillText(line, canvasWidth / 2, textY + index * textHeight);
      });
    }
    
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
