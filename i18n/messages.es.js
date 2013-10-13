window.ParsleyConfig = window.ParsleyConfig || {};

(function ($) {
  window.ParsleyConfig = $.extend( true, {}, window.ParsleyConfig, {
    messages: {
      // parsley //////////////////////////////////////
        defaultMessage: "Este valor no parece ser válido."
      , type: {
            email:      "Este valor no es una dirección de correo electrónico válida."
          , url:        "Este valor no es una URL válida."
          , urlstrict:  "Este valor no es una URL válida."
          , number:     "Este valor debe ser un número."
          , digits:     "Este valor debe ser numérico."
          , dateIso:    "Este valor no es una fecha válida (AAAA-MM-DD)."
          , alphanum:   "Este valor debe ser alfanumérico."
        }
      , notnull:        "Este valor no puede ser nulo."
      , notblank:       "Este valor no puede estar vacío."
      , required:       "Este campo es obligatorio."
      , regexp:         "Este valor no parece ser válido."
      , min:            "Este valor no debe ser inferior a %s."
      , max:            "Este valor no debe ser superior a %s."
      , range:          "Este valor debe estar entre %s y %s."
      , minlength:      "Esta cadena es demasiado corta. Debe ser por lo menos %s caracteres."
      , maxlength:      "Esta cadena es demasiado larga. Se debe tener un máximo de %s caracteres."
      , rangelength:    "Este valor debe contene entre %s y %s caracteres."
      , equalto:        "Este valor debe ser el mismo."

      // parsley.extend ///////////////////////////////
      , minwords:       "Este valor debe contener no más %s palabras"
      , maxwords:       "Este valor no puede exceder de %s palabras."
      , rangewords:     "Este valor debe conprender de %s a %s palabras."
      , greaterthan:    "Este valor debe ser mayor que %s."
      , lessthan:       "Este valor debe ser menor que %s."
    }
  });
}(window.jQuery || window.Zepto));
