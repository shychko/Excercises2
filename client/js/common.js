

function IsValidZipCode(zip) {
            var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
            if (isValid)
                alert('Valid ZipCode');
            else {
                alert('Invalid ZipCode');
            }
        }

        