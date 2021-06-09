$(document).ready(function () {
    $('.js-send-consult').click(function () {
        console.log(this)
        if ($(this).hasClass('disabled') == false) {
            let block = this
            $.post('/request.php', {
                name: $(this).closest('form').find('[name="consultname"]').val(),
                phone: $(this).closest('form').find('[name="consultTel"]').val(),
            }, function (data) {
                if (data === '1') {
                    $(block).closest('.modal-block').hide()
                    $('#brifResult').show()
                }
            })
            return false;
        }
    })


    $('.js-service-submit').click(function () {
        if ($(this).hasClass('disabled') == false) {
            let block = this
            $.post('/request.php', {
                subject: $(this).closest('form').find('[name="serviceName"]').val(),
                phone: $(this).closest('form').find('[name="serviceTel"]').val(),
            }, function (data) {
                if (data === '1') {
                    $(block).closest('form').hide()
                    $(block).closest('.modal-service-brif').find('.modal-service-result').show()
                }
            })
            return false;
        }
    })
})