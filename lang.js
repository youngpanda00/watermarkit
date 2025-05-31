document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    en: {
      addWatermark: 'Add Watermark',
      aboutUs: 'About Us',
      uploadImages: 'Upload Images',
      previewAdjust: 'Preview & Adjust Watermark',
      dragImages: 'Drag your images here or click to upload',
      uploadedImages: 'Uploaded Images',
      removeAll: 'Remove All',
      watermarkText: 'Watermark Text',
      textColor: 'Text Color',
      scale: 'Scale:',
      rotation: 'Rotation:',
      opacity: 'Opacity:',
      flipH: 'Flip H',
      flipV: 'Flip V',
      font: 'Font:',
      dragToMove: 'Drag watermark to move',
      maxWidth: 'Max Width (px)',
      maxHeight: 'Max Height (px)',
      next: 'Next',
      back: 'Back',
      export: 'Export',
      step1: '1. Upload Images',
      step2: '2. Add Watermark',
      step3: '3. Preview & Adjust Watermark',
      prompt: '🖋️ Drag your watermark PNG here or click to upload',
      aboutText1: 'At Allwatermarks, we\'re on a mission to simplify your creative workflow. What started as a tool for adding watermarks to images in bulk has evolved into a powerful suite of tools designed to save you time and boost your productivity. Whether you\'re editing hundreds of photos or tweaking a single image, our platform helps you get the job done quickly and easily.',
      aboutText2: 'And we\'re just getting started! As we expand to offer even more creative tools, you can expect a seamless experience that grows with your needs. With Allwatermarks, you\'ll always have the right tool at your fingertips, making your image editing process faster, smoother, and a whole lot more fun.',
      remove: 'Remove',
      enterWatermarkText: 'Enter watermark text',
      enterMaxWidth: 'Enter max width',
      enterMaxHeight: 'Enter max height'
    },
    zh: {
      addWatermark: '添加水印',
      aboutUs: '关于我们',
      uploadImages: '上传图片',
      previewAdjust: '预览和调整水印',
      dragImages: '拖拽图片到此或点击上传',
      uploadedImages: '已上传图片',
      removeAll: '全部移除',
      watermarkText: '水印文字',
      textColor: '文字颜色',
      scale: '缩放:',
      rotation: '旋转:',
      opacity: '不透明度:',
      flipH: '水平翻转',
      flipV: '垂直翻转',
      font: '字体:',
      dragToMove: '拖动水印移动',
      maxWidth: '最大宽度 (px)',
      maxHeight: '最大高度 (px)',
      next: '下一步',
      back: '返回',
      export: '导出',
      step1: '1. 上传图片',
      step2: '2. 添加水印',
      step3: '3. 预览和调整水印',
      prompt: '🖋️ 拖拽水印PNG到此或点击上传',
      aboutText1: '在Allwatermarks，我们的使命是简化您的创意工作流程。从批量添加水印的工具开始，我们已经发展成为一个强大的工具套件，旨在节省您的时间并提高工作效率。无论您是编辑数百张照片还是调整单张图片，我们的平台都能帮助您快速轻松地完成工作。',
      aboutText2: '我们才刚刚开始！随着我们扩展提供更多创意工具，您可以期待一个随着您的需求而增长的无缝体验。使用Allwatermarks，您将始终拥有合适的工具，使您的图像编辑过程更快、更流畅、更有趣。',
      remove: '移除',
      enterWatermarkText: '输入水印文字',
      enterMaxWidth: '输入最大宽度',
      enterMaxHeight: '输入最大高度'
    },
    es: {
      addWatermark: 'Agregar Marca de Agua',
      aboutUs: 'Sobre Nosotros',
      uploadImages: 'Subir Imágenes',
      previewAdjust: 'Vista Previa y Ajuste de Marca de Agua',
      dragImages: 'Arrastra tus imágenes aquí o haz clic para subir',
      uploadedImages: 'Imágenes Subidas',
      removeAll: 'Eliminar Todo',
      watermarkText: 'Texto de Marca de Agua',
      textColor: 'Color de Texto',
      scale: 'Escala:',
      rotation: 'Rotación:',
      opacity: 'Opacidad:',
      flipH: 'Voltear H',
      flipV: 'Voltear V',
      font: 'Fuente:',
      dragToMove: 'Arrastra la marca para mover',
      maxWidth: 'Ancho Máx (px)',
      maxHeight: 'Alto Máx (px)',
      next: 'Siguiente',
      back: 'Atrás',
      export: 'Exportar',
      step1: '1. Subir Imágenes',
      step2: '2. Agregar Marca de Agua',
      step3: '3. Vista Previa y Ajuste de Marca de Agua',
      prompt: '🖋️ Arrastra tu PNG de marca aquí o haz clic para subir',
      aboutText1: 'En Allwatermarks, nuestra misión es simplificar tu flujo de trabajo creativo. Lo que comenzó como una herramienta para agregar marcas de agua a imágenes en lote se ha convertido en una potente suite de herramientas diseñada para ahorrarte tiempo y aumentar tu productividad. Ya sea que estés editando cientos de fotos o ajustando una sola imagen, nuestra plataforma te ayuda a hacer el trabajo rápida y fácilmente.',
      aboutText2: '¡Y esto es solo el comienzo! A medida que ampliamos nuestra oferta de herramientas creativas, puedes esperar una experiencia fluida que crece con tus necesidades. Con Allwatermarks, siempre tendrás la herramienta adecuada a tu alcance, haciendo que tu proceso de edición de imágenes sea más rápido, más fluido y mucho más divertido.',
      remove: 'Eliminar',
      enterWatermarkText: 'Ingrese el texto de la marca de agua',
      enterMaxWidth: 'Ingrese ancho máximo',
      enterMaxHeight: 'Ingrese altura máxima'
    },
    hi: {
      addWatermark: 'वॉटरमार्क जोड़ें',
      aboutUs: 'हमारे बारे में',
      uploadImages: 'छवियाँ अपलोड करें',
      previewAdjust: 'पूर्वावलोकन और समायोजन',
      dragImages: 'अपनी छवियाँ यहाँ खींचें या अपलोड करने के लिए क्लिक करें',
      uploadedImages: 'अपलोड की गई छवियाँ',
      removeAll: 'सभी हटाएँ',
      watermarkText: 'वॉटरमार्क टेक्स्ट',
      textColor: 'टेक्स्ट रंग',
      scale: 'स्केल:',
      rotation: 'घुमाव:',
      opacity: 'अपारदर्शिता:',
      flipH: 'क्षैतिज पलटें',
      flipV: 'ऊर्ध्वाधर पलटें',
      font: 'फ़ॉन्ट:',
      dragToMove: 'वॉटरमार्क को खींचें',
      maxWidth: 'अधिकतम चौड़ाई (px)',
      maxHeight: 'अधिकतम ऊँचाई (px)',
      next: 'आगे',
      back: 'वापस',
      export: 'निर्यात',
      step1: '1. छवियाँ अपलोड करें',
      step2: '2. वॉटरमार्क जोड़ें',
      step3: '3. पूर्वावलोकन और समायोजन',
      prompt: '🖋️ अपना वॉटरमार्क PNG यहाँ खींचें या अपलोड करें',
      aboutText1: 'Allwatermarks में, हमारा मिशन आपके रचनात्मक वर्कफ़्लो को सरल बनाना है। जो एक बल्क वॉटरमार्क टूल के रूप में शुरू हुआ था, वह अब एक शक्तिशाली टूल सूट बन गया है जो आपका समय बचाने और उत्पादकता बढ़ाने के लिए डिज़ाइन किया गया है। चाहे आप सैकड़ों फ़ोटो संपादित कर रहे हों या एक ही छवि को समायोजित कर रहे हों, हमारा प्लेटफ़ॉर्म आपको जल्दी और आसानी से काम पूरा करने में मदद करता है।',
      aboutText2: 'और हम अभी शुरुआत कर रहे हैं! जैसे-जैसे हम और अधिक रचनात्मक टूल्स जोड़ते हैं, आप एक सहज अनुभव की उम्मीद कर सकते हैं जो आपकी आवश्यकताओं के साथ बढ़ता है। Allwatermarks के साथ, आपके पास हमेशा सही टूल होगा, जिससे आपकी छवि संपादन प्रक्रिया तेज़, आसान और अधिक मज़ेदार हो जाएगी।',
      remove: 'हटाएं',
      enterWatermarkText: 'वॉटरमार्क टेक्स्ट दर्ज करें',
      enterMaxWidth: 'अधिकतम चौड़ाई दर्ज करें',
      enterMaxHeight: 'अधिकतम ऊंचाई दर्ज करें'
    },
    fr: {
      addWatermark: 'Ajouter un Filigrane',
      aboutUs: 'À Propos',
      uploadImages: 'Télécharger des Images',
      previewAdjust: 'Aperçu & Ajuster le Filigrane',
      dragImages: 'Glissez vos images ici ou cliquez pour télécharger',
      uploadedImages: 'Images Téléchargées',
      removeAll: 'Tout Supprimer',
      watermarkText: 'Texte du Filigrane',
      textColor: 'Couleur du Texte',
      scale: 'Échelle:',
      rotation: 'Rotation:',
      opacity: 'Opacité:',
      flipH: 'Retourner H',
      flipV: 'Retourner V',
      font: 'Police:',
      dragToMove: 'Faites glisser le filigrane',
      maxWidth: 'Largeur Max (px)',
      maxHeight: 'Hauteur Max (px)',
      next: 'Suivant',
      back: 'Retour',
      export: 'Exporter',
      step1: '1. Télécharger des Images',
      step2: '2. Ajouter un Filigrane',
      step3: '3. Aperçu & Ajuster le Filigrane',
      prompt: '🖋️ Glissez votre PNG de filigrane ici ou cliquez pour télécharger',
      aboutText1: 'Chez Allwatermarks, notre mission est de simplifier votre flux de travail créatif. Ce qui a commencé comme un outil pour ajouter des filigranes en masse est devenu une suite puissante conçue pour vous faire gagner du temps et augmenter votre productivité. Que vous éditiez des centaines de photos ou ajustiez une seule image, notre plateforme vous aide à accomplir la tâche rapidement et facilement.',
      aboutText2: 'Et ce n\'est que le début ! À mesure que nous élargissons notre offre d\'outils créatifs, vous pouvez vous attendre à une expérience fluide qui évolue avec vos besoins. Avec Allwatermarks, vous aurez toujours le bon outil à portée de main, rendant votre processus d\'édition d\'images plus rapide, plus fluide et bien plus agréable.',
      remove: 'Supprimer',
      enterWatermarkText: 'Entrez le texte du filigrane',
      enterMaxWidth: 'Entrez la largeur maximale',
      enterMaxHeight: 'Entrez la hauteur maximale'
    },
    ar: {
      addWatermark: 'إضافة علامة مائية',
      aboutUs: 'معلومات عنا',
      uploadImages: 'رفع الصور',
      previewAdjust: 'معاينة وتعديل العلامة المائية',
      dragImages: 'اسحب صورك هنا أو انقر للرفع',
      uploadedImages: 'الصور المرفوعة',
      removeAll: 'حذف الكل',
      watermarkText: 'نص العلامة المائية',
      textColor: 'لون النص',
      scale: 'المقياس:',
      rotation: 'الدوران:',
      opacity: 'الشفافية:',
      flipH: 'عكس أفقي',
      flipV: 'عكس عمودي',
      font: 'الخط:',
      dragToMove: 'اسحب العلامة لتحريكها',
      maxWidth: 'العرض الأقصى (بكسل)',
      maxHeight: 'الارتفاع الأقصى (بكسل)',
      next: 'التالي',
      back: 'رجوع',
      export: 'تصدير',
      step1: '1. رفع الصور',
      step2: '2. إضافة علامة مائية',
      step3: '3. معاينة وتعديل العلامة المائية',
      prompt: '🖋️ اسحب PNG العلامة هنا أو انقر للرفع',
      aboutText1: 'في Allwatermarks، نحن في مهمة لتبسيط سير عملك الإبداعي. ما بدأ كأداة لإضافة علامات مائية للصور بالجملة تطور إلى مجموعة أدوات قوية مصممة لتوفير الوقت وزيادة الإنتاجية. سواء كنت تعدل مئات الصور أو تعدل صورة واحدة، منصتنا تساعدك على إنجاز المهمة بسرعة وسهولة.',
      aboutText2: 'ونحن فقط في البداية! مع توسعنا لتقديم المزيد من الأدوات الإبداعية، يمكنك توقع تجربة سلسة تنمو مع احتياجاتك. مع Allwatermarks، سيكون لديك دائمًا الأداة المناسبة في متناول يدك، مما يجعل عملية تحرير الصور أسرع وأكثر سلاسة ومتعة.',
      remove: 'حذف',
      enterWatermarkText: 'أدخل نص العلامة المائية',
      enterMaxWidth: 'أدخل العرض الأقصى',
      enterMaxHeight: 'أدخل الارتفاع الأقصى'
    },
    ru: {
      addWatermark: 'Добавить водяной знак',
      aboutUs: 'О нас',
      uploadImages: 'Загрузить изображения',
      previewAdjust: 'Просмотр и настройка водяного знака',
      dragImages: 'Перетащите изображения сюда или кликните для загрузки',
      uploadedImages: 'Загруженные изображения',
      removeAll: 'Удалить все',
      watermarkText: 'Текст водяного знака',
      textColor: 'Цвет текста',
      scale: 'Масштаб:',
      rotation: 'Поворот:',
      opacity: 'Непрозрачность:',
      flipH: 'Отразить по горизонтали',
      flipV: 'Отразить по вертикали',
      font: 'Шрифт:',
      dragToMove: 'Перетащите водяной знак',
      maxWidth: 'Макс. ширина (px)',
      maxHeight: 'Макс. высота (px)',
      next: 'Далее',
      back: 'Назад',
      export: 'Экспорт',
      step1: '1. Загрузить изображения',
      step2: '2. Добавить водяной знак',
      step3: '3. Просмотр и настройка водяного знака',
      prompt: '🖋️ Перетащите PNG водяного знака сюда или кликните для загрузки',
      aboutText1: 'В Allwatermarks мы стремимся упростить ваш творческий процесс. То, что начиналось как инструмент для массового добавления водяных знаков, превратилось в мощный набор инструментов, призванный сэкономить ваше время и повысить продуктивность. Будь то редактирование сотен фотографий или работа с одним изображением, наша платформа поможет вам быстро и легко справиться с задачей.',
      aboutText2: 'И это только начало! По мере расширения набора творческих инструментов вы можете рассчитывать на бесшовный опыт, который растет вместе с вашими потребностями. С Allwatermarks у вас всегда будет нужный инструмент под рукой, что сделает процесс редактирования изображений быстрее, проще и намного интереснее.',
      remove: 'Удалить',
      enterWatermarkText: 'Введите текст водяного знака',
      enterMaxWidth: 'Введите максимальную ширину',
      enterMaxHeight: 'Введите максимальную высоту'
    },
    pt: {
      addWatermark: 'Adicionar Marca d\'Água',
      aboutUs: 'Sobre',
      uploadImages: 'Enviar Imagens',
      previewAdjust: 'Pré-visualizar & Ajustar Marca d\'Água',
      dragImages: 'Arraste suas imagens aqui ou clique para enviar',
      uploadedImages: 'Imagens Enviadas',
      removeAll: 'Remover Tudo',
      watermarkText: 'Texto da Marca',
      textColor: 'Cor do Texto',
      scale: 'Escala:',
      rotation: 'Rotação:',
      opacity: 'Opacidade:',
      flipH: 'Inverter H',
      flipV: 'Inverter V',
      font: 'Fonte:',
      dragToMove: 'Arraste a marca para mover',
      maxWidth: 'Largura Máx (px)',
      maxHeight: 'Altura Máx (px)',
      next: 'Próximo',
      back: 'Voltar',
      export: 'Exportar',
      step1: '1. Enviar Imagens',
      step2: '2. Adicionar Marca d\'Água',
      step3: '3. Pré-visualizar & Ajustar Marca d\'Água',
      prompt: '🖋️ Arraste seu PNG de marca aqui ou clique para enviar',
      aboutText1: 'Na Allwatermarks, nossa missão é simplificar seu fluxo de trabalho criativo. O que começou como uma ferramenta para adicionar marcas d\'água em lote evoluiu para uma poderosa suíte de ferramentas projetada para economizar seu tempo e aumentar sua produtividade. Seja editando centenas de fotos ou ajustando uma única imagem, nossa plataforma ajuda você a fazer o trabalho de forma rápida e fácil.',
      aboutText2: 'E estamos apenas começando! À medida que expandimos para oferecer ainda mais ferramentas criativas, você pode esperar uma experiência perfeita que cresce com suas necessidades. Com o Allwatermarks, você sempre terá a ferramenta certa à mão, tornando seu processo de edição de imagens mais rápido, suave e muito mais divertido.',
      remove: 'Remover',
      enterWatermarkText: 'Digite o texto da marca d\'água',
      enterMaxWidth: 'Digite a largura máxima',
      enterMaxHeight: 'Digite a altura máxima'
    },
    ja: {
      addWatermark: 'ウォーターマーク追加',
      aboutUs: '私たちについて',
      uploadImages: '画像をアップロード',
      previewAdjust: 'プレビューとウォーターマーク調整',
      dragImages: '画像をここにドラッグまたはクリックしてアップロード',
      uploadedImages: 'アップロード済み画像',
      removeAll: 'すべて削除',
      watermarkText: 'ウォーターマークテキスト',
      textColor: 'テキスト色',
      scale: 'スケール:',
      rotation: '回転:',
      opacity: '不透明度:',
      flipH: '左右反転',
      flipV: '上下反転',
      font: 'フォント:',
      dragToMove: 'ドラッグして移動',
      maxWidth: '最大幅 (px)',
      maxHeight: '最大高さ (px)',
      next: '次へ',
      back: '戻る',
      export: 'エクスポート',
      step1: '1. 画像をアップロード',
      step2: '2. ウォーターマーク追加',
      step3: '3. プレビューとウォーターマーク調整',
      prompt: '🖋️ PNGをここにドラッグまたはクリックしてアップロード',
      aboutText1: 'Allwatermarksでは、クリエイティブなワークフローを簡素化することを使命としています。大量の画像にウォーターマークを追加するツールとして始まりましたが、今では時間を節約し生産性を向上させるための強力なツール群へと進化しました。何百枚もの写真を編集する場合でも、1枚の画像を調整する場合でも、当社のプラットフォームは迅速かつ簡単に作業を完了するのに役立ちます。',
      aboutText2: 'そして、これはほんの始まりです！さらに多くのクリエイティブツールを提供するにつれて、ニーズに合わせて成長するシームレスな体験を期待できます。Allwatermarksがあれば、常に最適なツールが手元にあり、画像編集プロセスがより速く、スムーズで、さらに楽しくなります。',
      remove: '削除',
      enterWatermarkText: 'ウォーターマークテキストを入力',
      enterMaxWidth: '最大幅を入力',
      enterMaxHeight: '最大高さを入力'
    },
    de: {
      addWatermark: 'Wasserzeichen Hinzufügen',
      aboutUs: 'Über Uns',
      uploadImages: 'Bilder Hochladen',
      previewAdjust: 'Vorschau & Wasserzeichen Anpassen',
      dragImages: 'Ziehe deine Bilder hierher oder klicke zum Hochladen',
      uploadedImages: 'Hochgeladene Bilder',
      removeAll: 'Alle Entfernen',
      watermarkText: 'Wasserzeichen-Text',
      textColor: 'Textfarbe',
      scale: 'Skalierung:',
      rotation: 'Drehung:',
      opacity: 'Deckkraft:',
      flipH: 'Horizontal spiegeln',
      flipV: 'Vertikal spiegeln',
      font: 'Schriftart:',
      dragToMove: 'Wasserzeichen ziehen',
      maxWidth: 'Max. Breite (px)',
      maxHeight: 'Max. Höhe (px)',
      next: 'Weiter',
      back: 'Zurück',
      export: 'Exportieren',
      step1: '1. Bilder Hochladen',
      step2: '2. Wasserzeichen Hinzufügen',
      step3: '3. Vorschau & Wasserzeichen Anpassen',
      prompt: '🖋️ Ziehe dein Wasserzeichen-PNG hierher oder klicke zum Hochladen',
      aboutText1: 'Bei Allwatermarks ist es unsere Mission, Ihren kreativen Workflow zu vereinfachen. Was als Tool zum Hinzufügen von Wasserzeichen zu Bildern in großen Mengen begann, hat sich zu einer leistungsstarken Suite entwickelt, die darauf ausgelegt ist, Ihnen Zeit zu sparen und Ihre Produktivität zu steigern. Egal, ob Sie Hunderte von Fotos bearbeiten oder ein einzelnes Bild anpassen, unsere Plattform hilft Ihnen, die Arbeit schnell und einfach zu erledigen.',
      aboutText2: 'Und wir fangen gerade erst an! Während wir unser Angebot an kreativen Tools erweitern, können Sie ein nahtloses Erlebnis erwarten, das mit Ihren Anforderungen wächst. Mit Allwatermarks haben Sie immer das richtige Werkzeug zur Hand, sodass Ihr Bildbearbeitungsprozess schneller, reibungsloser und viel unterhaltsamer wird.',
      remove: 'Entfernen',
      enterWatermarkText: 'Wasserzeichen-Text eingeben',
      enterMaxWidth: 'Maximale Breite eingeben',
      enterMaxHeight: 'Maximale Höhe eingeben'
    },
    ko: {
      addWatermark: '워터마크 추가',
      aboutUs: '소개',
      uploadImages: '이미지 업로드',
      previewAdjust: '미리보기 및 워터마크 조정',
      dragImages: '이미지를 여기로 드래그하거나 클릭하여 업로드',
      uploadedImages: '업로드된 이미지',
      removeAll: '모두 제거',
      watermarkText: '워터마크 텍스트',
      textColor: '텍스트 색상',
      scale: '크기:',
      rotation: '회전:',
      opacity: '불투명도:',
      flipH: '좌우 반전',
      flipV: '상하 반전',
      font: '글꼴:',
      dragToMove: '워터마크를 드래그하여 이동',
      maxWidth: '최대 너비 (px)',
      maxHeight: '최대 높이 (px)',
      next: '다음',
      back: '뒤로',
      export: '내보내기',
      step1: '1. 이미지 업로드',
      step2: '2. 워터마크 추가',
      step3: '3. 미리보기 및 워터마크 조정',
      prompt: '🖋️ 워터마크 PNG를 여기로 드래그하거나 클릭하여 업로드',
      aboutText1: 'Allwatermarks에서는 창의적인 워크플로를 단순화하는 것이 우리의 사명입니다. 대량의 이미지에 워터마크를 추가하는 도구로 시작했지만, 이제는 시간을 절약하고 생산성을 높이기 위한 강력한 도구 모음으로 발전했습니다. 수백 장의 사진을 편집하든 한 장의 이미지를 조정하든, 우리의 플랫폼은 빠르고 쉽게 작업을 완료할 수 있도록 도와줍니다.',
      aboutText2: '이제 시작일 뿐입니다! 더 많은 창의적인 도구를 제공함에 따라, 귀하의 요구에 맞게 성장하는 원활한 경험을 기대할 수 있습니다. Allwatermarks와 함께라면 항상 적합한 도구를 사용할 수 있어 이미지 편집 과정이 더 빠르고, 부드럽고, 훨씬 더 재미있어집니다.',
      remove: '제거',
      enterWatermarkText: '워터마크 텍스트 입력',
      enterMaxWidth: '최대 너비 입력',
      enterMaxHeight: '최대 높이 입력'
    },
    it: {
      addWatermark: 'Aggiungi Filigrana',
      aboutUs: 'Chi Siamo',
      uploadImages: 'Carica Immagini',
      previewAdjust: 'Anteprima & Regola Filigrana',
      dragImages: 'Trascina qui le immagini o clicca per caricare',
      uploadedImages: 'Immagini Caricate',
      removeAll: 'Rimuovi Tutto',
      watermarkText: 'Testo Filigrana',
      textColor: 'Colore Testo',
      scale: 'Scala:',
      rotation: 'Rotazione:',
      opacity: 'Opacità:',
      flipH: 'Rifletti H',
      flipV: 'Rifletti V',
      font: 'Carattere:',
      dragToMove: 'Trascina la filigrana',
      maxWidth: 'Larghezza Max (px)',
      maxHeight: 'Altezza Max (px)',
      next: 'Avanti',
      back: 'Indietro',
      export: 'Esporta',
      step1: '1. Carica Immagini',
      step2: '2. Aggiungi Filigrana',
      step3: '3. Anteprima & Regola Filigrana',
      prompt: '🖋️ Trascina qui il tuo PNG filigrana o clicca per caricare',
      aboutText1: 'In Allwatermarks, la nostra missione è semplificare il tuo flusso di lavoro creativo. Quello che è iniziato come uno strumento per aggiungere filigrane alle immagini in blocco si è evoluto in una potente suite di strumenti progettata per farti risparmiare tempo e aumentare la produttività. Che tu stia modificando centinaia di foto o regolando una singola immagine, la nostra piattaforma ti aiuta a portare a termine il lavoro in modo rapido e semplice.',
      aboutText2: 'E siamo solo all\'inizio! Man mano che ampliamo la nostra offerta di strumenti creativi, puoi aspettarti un\'esperienza fluida che cresce con le tue esigenze. Con Allwatermarks, avrai sempre lo strumento giusto a portata di mano, rendendo il processo di editing delle immagini più veloce, più fluido e molto più divertente.',
      remove: 'Rimuovi',
      enterWatermarkText: 'Inserisci il testo della filigrana',
      enterMaxWidth: 'Inserisci larghezza massima',
      enterMaxHeight: 'Inserisci altezza massima'
    },
    th: {
      addWatermark: 'เพิ่มลายน้ำ',
      aboutUs: 'เกี่ยวกับเรา',
      uploadImages: 'อัปโหลดรูปภาพ',
      previewAdjust: 'ดูตัวอย่าง & ปรับแต่งลายน้ำ',
      dragImages: 'ลากรูปภาพของคุณมาที่นี่หรือคลิกเพื่ออัปโหลด',
      uploadedImages: 'รูปภาพที่อัปโหลด',
      removeAll: 'ลบทั้งหมด',
      watermarkText: 'ข้อความลายน้ำ',
      textColor: 'สีข้อความ',
      scale: 'ขนาด:',
      rotation: 'หมุน:',
      opacity: 'ความทึบ:',
      flipH: 'พลิกแนวนอน',
      flipV: 'พลิกแนวตั้ง',
      font: 'ฟอนต์:',
      dragToMove: 'ลากลายน้ำเพื่อย้าย',
      maxWidth: 'ความกว้างสูงสุด (px)',
      maxHeight: 'ความสูงสูงสุด (px)',
      next: 'ถัดไป',
      back: 'ย้อนกลับ',
      export: 'ส่งออก',
      step1: '1. อัปโหลดรูปภาพ',
      step2: '2. เพิ่มลายน้ำ',
      step3: '3. ดูตัวอย่าง & ปรับแต่งลายน้ำ',
      prompt: '🖋️ ลาก PNG ลายน้ำของคุณมาที่นี่หรือคลิกเพื่ออัปโหลด',
      aboutText1: 'ที่ Allwatermarks ภารกิจของเราคือการทำให้เวิร์กโฟลว์สร้างสรรค์ของคุณง่ายขึ้น จากจุดเริ่มต้นที่เป็นเครื่องมือเพิ่มลายน้ำในภาพจำนวนมาก ตอนนี้เราได้พัฒนาเป็นชุดเครื่องมือที่ทรงพลังเพื่อประหยัดเวลาและเพิ่มประสิทธิภาพ ไม่ว่าคุณจะกำลังแก้ไขภาพหลายร้อยภาพหรือปรับแต่งเพียงภาพเดียว แพลตฟอร์มของเราช่วยให้คุณทำงานได้อย่างรวดเร็วและง่ายดาย',
      aboutText2: 'และนี่เป็นเพียงจุดเริ่มต้น! เมื่อเราขยายเพื่อเสนอเครื่องมือสร้างสรรค์มากขึ้น คุณจะได้รับประสบการณ์ที่ราบรื่นซึ่งเติบโตไปพร้อมกับความต้องการของคุณ ด้วย Allwatermarks คุณจะมีเครื่องมือที่เหมาะสมอยู่เสมอ ทำให้กระบวนการแก้ไขภาพของคุณเร็วขึ้น ราบรื่นขึ้น และสนุกยิ่งขึ้น',
      remove: 'ลบ',
      enterWatermarkText: 'ป้อนข้อความลายน้ำ',
      enterMaxWidth: 'ป้อนความกว้างสูงสุด',
      enterMaxHeight: 'ป้อนความสูงสูงสุด'
    },
    pl: {
      addWatermark: 'Dodaj Znak Wodny',
      aboutUs: 'O nas',
      uploadImages: 'Prześlij Obrazy',
      previewAdjust: 'Podgląd i Dostosuj Znak Wodny',
      dragImages: 'Przeciągnij obrazy tutaj lub kliknij, aby przesłać',
      uploadedImages: 'Przesłane Obrazy',
      removeAll: 'Usuń Wszystko',
      watermarkText: 'Tekst Znaku Wodnego',
      textColor: 'Kolor Tekstu',
      scale: 'Skala:',
      rotation: 'Obrót:',
      opacity: 'Nieprzezroczystość:',
      flipH: 'Odbij w poziomie',
      flipV: 'Odbij w pionie',
      font: 'Czcionka:',
      dragToMove: 'Przeciągnij znak wodny',
      maxWidth: 'Maks. szerokość (px)',
      maxHeight: 'Maks. wysokość (px)',
      next: 'Dalej',
      back: 'Wstecz',
      export: 'Eksportuj',
      step1: '1. Prześlij Obrazy',
      step2: '2. Dodaj Znak Wodny',
      step3: '3. Podgląd i Dostosuj Znak Wodny',
      prompt: '🖋️ Przeciągnij tutaj PNG znaku wodnego lub kliknij, aby przesłać',
      aboutText1: 'W Allwatermarks naszym celem jest uproszczenie Twojego kreatywnego przepływu pracy. To, co zaczęło się jako narzędzie do masowego dodawania znaków wodnych, przekształciło się w potężny zestaw narzędzi zaprojektowany, aby zaoszczędzić Twój czas i zwiększyć produktywność. Niezależnie od tego, czy edytujesz setki zdjęć, czy dostosowujesz jedno, nasza platforma pomaga szybko i łatwo wykonać zadanie.',
      aboutText2: 'A to dopiero początek! W miarę jak rozszerzamy naszą ofertę narzędzi kreatywnych, możesz oczekiwać płynnego doświadczenia, które rośnie wraz z Twoimi potrzebami. Z Allwatermarks zawsze będziesz mieć odpowiednie narzędzie pod ręką, co sprawi, że proces edycji zdjęć będzie szybszy, płynniejszy i o wiele przyjemniejszy.',
      remove: 'Usuń',
      enterWatermarkText: 'Wpisz tekst znaku wodnego',
      enterMaxWidth: 'Wpisz maksymalną szerokość',
      enterMaxHeight: 'Wpisz maksymalną wysokość'
    }
  };

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    const t = translations[lang] || translations['en'];
    
    // Update nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    if (navTabs.length > 0) navTabs[0].textContent = t.addWatermark;
    if (navTabs.length > 1) navTabs[1].textContent = t.aboutUs;

    // Update stepper
    const stepper1 = document.querySelector('#stepper-1');
    if (stepper1) stepper1.innerHTML = `<div class="step-circle">1</div>${t.uploadImages}<div class="step-line"></div>`;
    const stepper2 = document.querySelector('#stepper-2');
    if (stepper2) stepper2.innerHTML = `<div class="step-circle">2</div>${t.addWatermark}<div class="step-line"></div>`;
    const stepper3 = document.querySelector('#stepper-3');
    if (stepper3) stepper3.innerHTML = `<div class="step-circle">3</div>${t.previewAdjust}`;

    // Update section titles
    const s1h1 = document.querySelector('#step-1 h1');
    if (s1h1) s1h1.textContent = t.step1;
    const s2h1 = document.querySelector('#step-2 h1');
    if (s2h1) s2h1.textContent = t.step2;
    const s3h1 = document.querySelector('#step-3 h1');
    if (s3h1) s3h1.textContent = t.step3;

    // Update upload box prompt
    const uploadText = document.querySelector('.upload-text');
    if (uploadText) uploadText.textContent = t.dragImages;
    const watermarkPrompt = document.getElementById('watermarkPrompt');
    if (watermarkPrompt) watermarkPrompt.textContent = t.prompt;

    // Update uploaded images section
    const imageListSpan = document.querySelector('#imageList span');
    if (imageListSpan) imageListSpan.textContent = t.uploadedImages;
    const removeAllButton = document.getElementById('removeAllButton');
    if (removeAllButton) removeAllButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg> ${t.removeAll}`;

    // Update watermark section
    const labelTextWatermark = document.querySelector('label[for="textWatermark"]');
    if (labelTextWatermark) labelTextWatermark.textContent = t.watermarkText;
    const labelTextColor = document.querySelector('label[for="textColor"]');
    if (labelTextColor) labelTextColor.textContent = t.textColor;
    const textWatermarkInput = document.getElementById('textWatermark');
    if (textWatermarkInput) textWatermarkInput.placeholder = t.enterWatermarkText;

    // Update max width/height placeholders
    const maxWidthInput = document.getElementById('maxWidth');
    if (maxWidthInput) maxWidthInput.placeholder = t.enterMaxWidth;
    const maxHeightInput = document.getElementById('maxHeight');
    if (maxHeightInput) maxHeightInput.placeholder = t.enterMaxHeight;

    // Update controls
    const labelScale = document.querySelector('label[for="watermarkScale"]');
    if (labelScale) labelScale.textContent = t.scale;
    const labelRotation = document.querySelector('label[for="watermarkRotation"]');
    if (labelRotation) labelRotation.textContent = t.rotation;
    const labelOpacity = document.querySelector('label[for="watermarkOpacity"]');
    if (labelOpacity) labelOpacity.textContent = t.opacity;
    const flipHBtn = document.getElementById('flipHorizontalBtn');
    if (flipHBtn) flipHBtn.textContent = t.flipH;
    const flipVBtn = document.getElementById('flipVerticalBtn');
    if (flipVBtn) flipVBtn.textContent = t.flipV;
    const labelFont = document.querySelector('label[for="watermarkFont"]');
    if (labelFont) labelFont.textContent = t.font;
    const watermarkControlsSpan = document.querySelector('.watermark-controls span');
    if (watermarkControlsSpan) watermarkControlsSpan.textContent = t.dragToMove;

    // Update dimensions
    const labelMaxWidth = document.querySelector('label[for="maxWidth"]');
    if (labelMaxWidth) labelMaxWidth.textContent = t.maxWidth;
    const labelMaxHeight = document.querySelector('label[for="maxHeight"]');
    if (labelMaxHeight) labelMaxHeight.textContent = t.maxHeight;

    // Update step nav buttons
    const nextToStep2Btn = document.getElementById('nextToStep2');
    if (nextToStep2Btn) nextToStep2Btn.textContent = t.next;
    const nextToStep3Btn = document.getElementById('nextToStep3');
    if (nextToStep3Btn) nextToStep3Btn.textContent = t.next;
    const backToStep1Btn = document.getElementById('backToStep1');
    if (backToStep1Btn) backToStep1Btn.textContent = t.back;
    const backToStep2Btn = document.getElementById('backToStep2');
    if (backToStep2Btn) backToStep2Btn.textContent = t.back;
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.textContent = t.export;

    // Update about page text
    const aboutText1 = document.getElementById('aboutText1');
    if (aboutText1) aboutText1.textContent = t.aboutText1;
    const aboutText2 = document.getElementById('aboutText2');
    if (aboutText2) aboutText2.textContent = t.aboutText2;

    // Update any element with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (t[key]) el.textContent = t[key];
    });

    // Update all per-image remove buttons in the image list
    document.querySelectorAll('button[data-translate="remove"]').forEach(btn => {
      btn.textContent = t.remove;
    });

    // Trigger any necessary UI updates
    if (typeof updateStepperButtons === 'function') {
      updateStepperButtons();
    }
    if (typeof drawPreviewCanvas === 'function') {
      drawPreviewCanvas();
    }
  }

  // Initialize language switcher
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    setLanguage(savedLang);
    
    langSelect.addEventListener('change', function() {
      setLanguage(this.value);
      if (typeof showStep === 'function') {
        showStep(currentStep);
      }
    });
  }

  // Ensure the first step is visible on Add Watermark page
  if (typeof showStep === 'function') {
    showStep(0);
  }

  window.setLanguage = setLanguage;
  window.translations = translations;
}); 