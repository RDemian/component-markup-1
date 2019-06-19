import $ from 'jquery';

function formsValidate() {
    // методы проверки
    $.validator.addMethod("emailText", function (value, element) {
        return this.optional(element) || /^(?:[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+(?:\.[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+)*)@(?:[-a-z\d_]+\.){1,60}[a-z]{2,6}$/.test(value);
    }, "E-mail введен некорректно");

    $.validator.addMethod("passwordText", function (value, element) {
        return this.optional(element) || /^(([0-9a-zA-Z-!"#$%&'()*,+.\/\:^;<=>?@[\\\]_`{|}~]{6,})).*$/.test(value);
    }, "Только цифры/латинские буквы/символы/минимум 6 символов");

    $.validator.addMethod("cRequired", $.validator.methods.required,
        "Обязательное поле");

    // классы для проверки
    $.validator.addClassRules({
        email: {
            cRequired: true,
            emailText: true,
            email: false
        },
        pass: {
            cRequired: true,
            passwordText: true
        },
        name: {
            cRequired: true,
        },
        surname: {
            cRequired: true,
        },
        company: {
            cRequired: true,
        },
        phone: {
            cRequired: true,
        },
        ava: {
            cRequired: true,
        },
        requiredText: {
            cRequired: true,
        }
    });

    // валидация форм регистрации, входа, пароля
    const jsValidate = $(".js-validate");

    jsValidate.each(function () {
        let $form = $(this);

        $form.validate({

            errorElement: 'div',

            errorClass: 'form__error',

            validClass: 'form__valid',
        });
    });
}

export default formsValidate;
