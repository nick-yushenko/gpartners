var video = document.querySelector('#vid');

// video.play()
var promise = video.play();
var videoImg = document.querySelector('#vidImg')
if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Show something in the UI that the video is muted
    videoImg.classList.add('active')
  });
}

// var video = document.querySelector('video');
// var promise = video.play();

// if (promise !== undefined) {
//   promise.then(_ => {
//     // Autoplay started!
//   }).catch(error => {
//     // Show something in the UI that the video is muted
//     video.muted = true;
//     video.play();
//   });
// }



const templates = (document.querySelector('.templates')) ? document.querySelector('.templates') : document.body

let headerHeight = document.querySelector('.header').clientHeight
const anchors = document.querySelectorAll('a.anchor')
if (anchors)
  anchors.forEach(function (item) {
    item.addEventListener('click', function () {
      let blockID = item.getAttribute('href').substring(1)
      let paddingTop = $('#' + blockID).css('padding-top')
      paddingTop = paddingTop.substr(0, paddingTop.length - 2)
      $("html, body").animate({
        scrollTop: $('#' + blockID).offset().top + Number(paddingTop) - 10 - headerHeight + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
    })
  })


const modalCloseBtns = document.querySelectorAll('.modal-close')
if (modalCloseBtns.length > 0) {
  modalCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let modal = btn.parentElement.parentElement
      if (modal.classList.contains('modal')) {
        modal.classList.remove('active')
        document.querySelector('body').style.overflow = 'auto'
      } else {
        modal = btn.parentElement.parentElement.parentElement
        modal.classList.remove('active')
        document.querySelector('body').style.overflow = 'auto'
      }
    })
  })
}
const brifModal = document.querySelector('.modal-brif')
const toBrifModal = document.querySelectorAll('.js-toBrif')

if (toBrifModal.length > 0 && brifModal) {
  toBrifModal.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      document.querySelectorAll('.modal').forEach(function (m) {
        m.classList.remove('active')
      })
      brifModal.classList.add('active')
      document.querySelector('body').style.overflow = 'hidden'
    })
  })
}

const toService1 = document.querySelector('.js-toService-1')
const toService2 = document.querySelector('.js-toService-2')
const toService3 = document.querySelector('.js-toService-3')
const toService4 = document.querySelector('.js-toService-4')

const serviceModal1 = document.querySelector('#serviceModal1')
const serviceModal2 = document.querySelector('#serviceModal2')
const serviceModal3 = document.querySelector('#serviceModal3')
const serviceModal4 = document.querySelector('#serviceModal4')

if (toService1 && serviceModal1) {
  toService1.addEventListener('click', function (e) {
    serviceModal1.classList.add('active')
    document.querySelector('body').style.overflow = 'hidden'
    let modalBlock = serviceModal1.querySelector('.modal-block')
    let serviceWrap = modalBlock.querySelector('.modal-service-wrap')

    let modalBlockHeight = modalBlock.clientHeight
    let modalTitle = modalBlock.querySelector('.modal-title')
    let modalTitleHeight = modalTitle.clientHeight
    let modalBtn = modalBlock.querySelector('.modal-service-btn')
    let modalBtnHeight = modalBtn.clientHeight
    let paddingTop = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-top")
    let paddingBottom = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-bottom")
    let margin = window.getComputedStyle(modalTitle, null).getPropertyValue("margin-bottom")
    let marginWrap = window.getComputedStyle(serviceWrap, null).getPropertyValue("margin-bottom")
    paddingTop = paddingTop.replace('px', '')
    paddingBottom = paddingBottom.replace('px', '')
    margin = margin.replace('px', '')
    marginWrap = marginWrap.replace('px', '')

    serviceWrap.style.height = modalBlockHeight - modalTitleHeight - paddingBottom - paddingTop - margin - modalBtnHeight - marginWrap + 'px'


  })
}
if (toService2 && serviceModal2) {
  toService2.addEventListener('click', function (e) {
    serviceModal2.classList.add('active')
    document.querySelector('body').style.overflow = 'hidden'

    let modalBlock = serviceModal2.querySelector('.modal-block')
    let serviceWrap = modalBlock.querySelector('.modal-service-wrap')

    let modalBlockHeight = modalBlock.clientHeight
    let modalTitle = modalBlock.querySelector('.modal-title')
    let modalTitleHeight = modalTitle.clientHeight
    let modalBtn = modalBlock.querySelector('.modal-service-btn')
    let modalBtnHeight = modalBtn.clientHeight
    let paddingTop = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-top")
    let paddingBottom = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-bottom")
    let margin = window.getComputedStyle(modalTitle, null).getPropertyValue("margin-bottom")
    let marginWrap = window.getComputedStyle(serviceWrap, null).getPropertyValue("margin-bottom")
    paddingTop = paddingTop.replace('px', '')
    paddingBottom = paddingBottom.replace('px', '')
    margin = margin.replace('px', '')
    marginWrap = marginWrap.replace('px', '')

    serviceWrap.style.height = modalBlockHeight - modalTitleHeight - paddingBottom - paddingTop - margin - modalBtnHeight - marginWrap + 'px'

  })
}
if (toService3 && serviceModal3) {
  toService3.addEventListener('click', function (e) {
    serviceModal3.classList.add('active')
    document.querySelector('body').style.overflow = 'hidden'

    let modalBlock = serviceModal3.querySelector('.modal-block')
    let serviceWrap = modalBlock.querySelector('.modal-service-wrap')

    let modalBlockHeight = modalBlock.clientHeight
    let modalTitle = modalBlock.querySelector('.modal-title')
    let modalTitleHeight = modalTitle.clientHeight
    let modalBtn = modalBlock.querySelector('.modal-service-btn')
    let modalBtnHeight = modalBtn.clientHeight
    let paddingTop = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-top")
    let paddingBottom = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-bottom")
    let margin = window.getComputedStyle(modalTitle, null).getPropertyValue("margin-bottom")
    let marginWrap = window.getComputedStyle(serviceWrap, null).getPropertyValue("margin-bottom")
    paddingTop = paddingTop.replace('px', '')
    paddingBottom = paddingBottom.replace('px', '')
    margin = margin.replace('px', '')
    marginWrap = marginWrap.replace('px', '')

    serviceWrap.style.height = modalBlockHeight - modalTitleHeight - paddingBottom - paddingTop - margin - modalBtnHeight - marginWrap + 'px'

  })
}
if (toService4 && serviceModal4) {
  toService4.addEventListener('click', function (e) {
    serviceModal4.classList.add('active')
    document.querySelector('body').style.overflow = 'hidden'

    let modalBlock = serviceModal4.querySelector('.modal-block')
    let serviceWrap = modalBlock.querySelector('.modal-service-wrap')

    let modalBlockHeight = modalBlock.clientHeight
    let modalTitle = modalBlock.querySelector('.modal-title')
    let modalTitleHeight = modalTitle.clientHeight
    let modalBtn = modalBlock.querySelector('.modal-service-btn')
    let modalBtnHeight = modalBtn.clientHeight
    let paddingTop = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-top")
    let paddingBottom = window.getComputedStyle(modalBlock, null).getPropertyValue("padding-bottom")
    let margin = window.getComputedStyle(modalTitle, null).getPropertyValue("margin-bottom")
    let marginWrap = window.getComputedStyle(serviceWrap, null).getPropertyValue("margin-bottom")
    paddingTop = paddingTop.replace('px', '')
    paddingBottom = paddingBottom.replace('px', '')
    margin = margin.replace('px', '')
    marginWrap = marginWrap.replace('px', '')

    serviceWrap.style.height = modalBlockHeight - modalTitleHeight - paddingBottom - paddingTop - margin - modalBtnHeight - marginWrap + 'px'

  })
}
const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu li')

burger.addEventListener('click', function (e) {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  })
})


document.addEventListener('scroll', function (e) {
  if (getBodyScrollTop() > 50)
    document.querySelector('.header').classList.add('scrolled')
  else
    document.querySelector('.header').classList.remove('scrolled')
  video.play();

})

function getBodyScrollTop() {
  var h = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  return h
}


if (document.querySelector('#manifestoSlider')) {
  let slideOffset = (window.innerWidth - document.querySelector('#wrap').clientWidth) / 2
  const manifestoSlider = new Swiper('#manifestoSlider', {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesOffsetBefore: slideOffset,
    slidesOffsetAfter: slideOffset,
    spaceBetween: 8,
    navigation: {
      nextEl: '.manifesto-slider__arrow.next',
      prevEl: '.manifesto-slider__arrow.prev',
    },
    breakpoints: {
      // when window width is >= 320px
      425: {
        spaceBetween: 25,
      },
    }
  });
}

const feedMoreBtn = document.querySelector('.js-feedMore')
const feedItems = document.querySelectorAll('.feed-item')

if (feedMoreBtn && feedItems.length > 0) {
  if (feedItems.length <= 1)
    feedMoreBtn.style.display = 'none'
  else {
    feedMoreBtn.innerHTML = 'Показать ещё ' + (feedItems.length - 1) + ' отзыва'
    feedMoreBtn.addEventListener('click', function (e) {
      feedItems.forEach(function (item) {
        item.classList.add('opened')
      })
      feedMoreBtn.style.display = 'none'

    })
  }
}

const casesItems = document.querySelectorAll('.cases-item')
const casesMore = document.querySelector('.cases-more')
if (casesItems.length > 0) {

  // проверка количества блоков 
  if (casesItems.length > 5) {
    casesMore.style.display = 'block'
    casesMore.addEventListener('click', function (e) {
      casesItems.forEach(function (item) {
        if (item.classList.contains('hidden')) {

          let prevItem = $(item).prev()[0]
          console.log(prevItem)
          if (prevItem)
            if (prevItem.classList.contains('cases-item')) {
              prevItem.querySelector('.cases-head').classList.remove('border-prev')
              prevItem.querySelector('.cases-head').classList.toggle('border')
            }

        }
        item.classList.remove('hidden')
      })
      casesMore.style.display = 'none'

    })
  } else {
    casesMore.style.display = 'none'

  }

  let casesWrap = templates.querySelector('#caseWrapper')
  casesItems.forEach(function (item) {
    let itemBody = item.querySelector('.cases-body')

    let clone = itemBody.cloneNode(true);
    clone.classList.add('template')
    clone.classList.add('template')
    casesWrap.appendChild(clone);

    item.querySelectorAll('.cases-head').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        item.classList.toggle('opened')
        if (item.classList.contains('opened')) {
          // открытие
          try {
            let h = clone.clientHeight
            item.querySelector('.cases-body').style.height = h + 'px'
            item.style.height = h + 'px'
          } catch (e) {
            item.querySelector('.cases-body').style.height = 'max-content'
            item.style.height = 'max-content'
          }
          // стилизовать следующий и предыдущий элемент 
          let prevItem = $(item).prev()[0]
          let nextItem = $(item).next()[0]
          if (prevItem)
            if (prevItem.classList.contains('cases-item')) {
              prevItem.querySelector('.cases-head').classList.toggle('border-prev')
              prevItem.querySelector('.cases-head').classList.toggle('border')
            }
          if (nextItem)
            if (nextItem.classList.contains('cases-item')) {
              nextItem.querySelector('.cases-head').classList.toggle('border-next')
              // nextItem.querySelector('.cases-head').classList.add('border')

            }

        }
        else {
          // зыкрытие

          item.querySelector('.cases-body').style.height = 0
          console.log(item.querySelector('.cases-head').clientHeight)
          item.style.height = item.querySelector('.cases-head').clientHeight + 1 + 'px'

          // стилизовать следующий и предыдущий элемент 
          let prevItem = $(item).prev()[0]
          let nextItem = $(item).next()[0]
          if (prevItem)
            if (prevItem.classList.contains('cases-item')) {
              prevItem.querySelector('.cases-head').classList.toggle('border-prev')
              prevItem.querySelector('.cases-head').classList.toggle('border')

            }
          if (nextItem)

            if (nextItem.classList.contains('cases-item')) {
              nextItem.querySelector('.cases-head').classList.toggle('border-next')
              // nextItem.querySelector('.cases-head').classList.remove('border')

            }
        }
      })
    })
    item.querySelectorAll('.cases-body .cases-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        item.classList.toggle('opened')
        if (item.classList.contains('opened')) {
          // открытие
          try {
            let h = clone.clientHeight
            item.querySelector('.cases-body').style.height = h + 'px'
            item.style.height = h + 'px'
          } catch (e) {
            item.querySelector('.cases-body').style.height = 'max-content'
            item.style.height = 'max-content'
          }
          // стилизовать следующий и предыдущий элемент 
          let prevItem = $(item).prev()[0]
          let nextItem = $(item).next()[0]
          if (prevItem)
            if (prevItem.classList.contains('cases-item')) {
              prevItem.querySelector('.cases-head').classList.toggle('border-prev')
              prevItem.querySelector('.cases-head').classList.toggle('border')
            }
          if (nextItem)
            if (nextItem.classList.contains('cases-item')) {
              nextItem.querySelector('.cases-head').classList.toggle('border-next')
              // nextItem.querySelector('.cases-head').classList.add('border')

            }

        }
        else {
          // зыкрытие

          item.querySelector('.cases-body').style.height = 0
          console.log(item.querySelector('.cases-head').clientHeight)
          item.style.height = item.querySelector('.cases-head').clientHeight + 1 + 'px'

          // стилизовать следующий и предыдущий элемент 
          let prevItem = $(item).prev()[0]
          let nextItem = $(item).next()[0]
          if (prevItem)
            if (prevItem.classList.contains('cases-item')) {
              prevItem.querySelector('.cases-head').classList.toggle('border-prev')
              prevItem.querySelector('.cases-head').classList.toggle('border')

            }
          if (nextItem)

            if (nextItem.classList.contains('cases-item')) {
              nextItem.querySelector('.cases-head').classList.toggle('border-next')
              // nextItem.querySelector('.cases-head').classList.remove('border')

            }
        }
      })
    })
  })
}

// valdation 
$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value) // has only allowed chars letter
}, "Недопустимое значение");

$('#brifForm').validate({
  rules: {
    consultname: {
      required: true,
      pwcheckallowedchars: true,
    },
    consultTel: {
      required: true
    },
    privacy: {
      required: true
    },

  },
  messages: {

    consultname: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Минимум 2 символа"),
      maxlength: jQuery.validator.format("Максимум 80 символов"),
    },
    consultTel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),
    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onclick: function (element) {
    let submit = document.querySelector(' #brifForm .form-submit')

    if ($('#brifForm').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },
  onkeyup: function (element) {
    let submit = document.querySelector(' #brifForm .form-submit')

    if ($('#brifForm').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },



});
$('#serviceForm1').validate({
  rules: {

    serviceTel: {
      required: true
    },


  },
  messages: {


    serviceTel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),

    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onkeyup: function (element) {
    let submit = this.currentForm.querySelector('.form-submit')
    if ($('#serviceForm1').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },


});
$('#serviceForm2').validate({
  rules: {

    serviceTel: {
      required: true
    },


  },
  messages: {


    serviceTel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),

    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onkeyup: function (element) {
    let submit = this.currentForm.querySelector('.form-submit')
    if ($('#serviceForm2').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },


});
$('#serviceForm3').validate({
  rules: {

    serviceTel: {
      required: true
    },


  },
  messages: {


    serviceTel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),

    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onkeyup: function (element) {
    let submit = this.currentForm.querySelector('.form-submit')
    if ($('#serviceForm3').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },


});
$('#serviceForm4').validate({
  rules: {

    serviceTel: {
      required: true
    },


  },
  messages: {


    serviceTel: {
      required: jQuery.validator.format("Поле не заполнено"),
      minlength: jQuery.validator.format("Номер указан не полностью"),

    },
  },
  errorElement: "span",
  errorClass: "invalid",
  highlight: function (element) {
    $(element).parent().addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).parent().removeClass("invalid");
  },
  focusInvalid: false,
  onkeyup: function (element) {
    let submit = this.currentForm.querySelector('.form-submit')
    if ($('#serviceForm4').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }

    // этот код взят из события onkeyup по умолчанию. Нужен чтобы скрывать/показывать ошибку после каждого введенного символа 
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },


});

$('.form-tel').mask('+0 (000) 000 00 00');
$('.form-tel').on('input', function () {
  let val = $(this).val();
  if (val[1] == 8) {
    $(this).val(7 + val.slice(2));
  }
});