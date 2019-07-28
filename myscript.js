$(document).ready(function(){
    // var listOfStudents = [];
    console.log("**",listOfStudents)
    $('#add').on('click',function(event){
        event.preventDefault();
       
        let studentName = {}
        studentName['name']=$('#inputName').val();
        studentName['age']=$('#inputAge').val();
        studentName['standard']=$('#inputStandard').val();
        console.log("studentName",studentName)

        $('tbody').append("<tr><th>"+studentName.name+"</th><th>"+studentName.age+"</th><th>"+studentName.standard+"</th></tr>")
        // listOfStudents.push(studentName);
        $('form :input').val('');
        console.log("Listofstudents",listOfStudents)
    })
})