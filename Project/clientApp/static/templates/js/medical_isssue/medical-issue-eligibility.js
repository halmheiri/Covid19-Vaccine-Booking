$(document).ready(function () {

     //validate admin
         validate_user('admin')
    get_medical_issues('/api/medical-issues/')

});



function get_medical_issues(url) {
    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        url: url,
        success: function (data) {
            console.log(data)

            for (var i = 0; i < data.length; i++) {
                $('#dataTable').DataTable().row.add([
                    data[i].id,
                    data[i].name,
                    ()=>{
                      if (data[i].vaccineEligibility) {
                    return '<i class="material-icons md-24">done</i>'
                } else {
                        return '<i class="material-icons md-24">close</i>'
                }
                    },
                    '<a href="medical-issue-eligibility/' + data[i].id + '/edit" class="edit"><i\n' +
                    '                                class="material-icons"\n' +
                    '                                title="Edit">&#xE254;</i></a>' +
                    '    <a  onclick="deleteEntity(&quot/api/medical-issues/' + data[i].id + '&quot)" class="delete" style="cursor: pointer"><i\n' +
                    '                                class="material-icons"\n' +
                    '                                title="Delete">&#xe888;</i></a>'
                ]).draw(false);
            }
        },
        error: function (a, jqXHR, exception) {
        }
    });
}