

function uploadAvatar() {
    const uploadFile = document.querySelector('.js-img-upload');
    if (!uploadFile) return;
    uploadFile.addEventListener('change', onUpLoadChange);

    function readFile(file) {
        const imgPicture = document.querySelector('.comments__new-avatar-img');
        
        const reader = new FileReader();
        const validFile = validateFile(file);
        
        if (validFile) {
            reader.addEventListener('load', onReaderLoad);
            reader.readAsDataURL(file);
        }

        function onReaderLoad() {
            imgPicture.src = reader.result;
            reader.removeEventListener('load', onReaderLoad);
        }
    
    }
    
    function onUpLoadChange() {
        const file = this.files[0];
        if (file) {
            readFile(file);
        };
    }

    function validateFile(currentFile) {
        const {type, size} = currentFile;
        return CheckFileType(type) &&
            CheckFileSize(size);
    }

    function CheckFileType(fileType) {
        if (fileType == "image/jpeg") {
            return true;
        } else if (fileType == "image/png") {
            return true;
        } else if (fileType == "image/gif") {
            return true;
        } else {
            alert('Формат файла должен быть jpg/png/gif!');
            return false;
        }
    }

    function CheckFileSize(fileSize) {
        if (fileSize < 10300000) {
            return true;
        } else {
            alert('Максимальный размер файла 10Мб!');
            return false;
        }
    }
}

export default uploadAvatar;
