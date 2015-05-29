
$(function() {
  return $("[data-xeditable=true]").each(function() {
    return $(this).editable({
      ajaxOptions: {
        type: "PUT",
        dataType: "json"
      },
      params: function(params) {
        var railsParams;
        railsParams = {};
        railsParams[$(this).data("model")] = {};
        railsParams[$(this).data("model")][params.name] = params.value;
        return railsParams;
      }
    });
  });
});


// Started PUT "/en/users/23" for 192.168.1.2 at 2015-05-29 10:48:16 +0800
// Processing by UsersController#update as JSON
// Parameters: {"user"=>{"cell_phone"=>"13912345678"}, "locale"=>"en", "id"=>"23"}
