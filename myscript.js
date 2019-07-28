$(document).ready(function(){
    var listOfStudents = [];
    var edit = false;
    var editIndex;
    // console.log("**",listOfStudents)
    $('#add').on('click',function(event){
        event.preventDefault();
        let studentName = {}
            studentName['name']=$('#inputName').val();
            studentName['age']=$('#inputAge').val();
            studentName['standard']=$('#inputStandard').val();
        // check edit or add
        if(!edit){
            // enters this block when u click submit
            listOfStudents.push(studentName);
            $('form :input').val('');
            listAllStudents(listOfStudents)
        }
        else{
            // enters this block when u click update
            listOfStudents.splice(editIndex,1,studentName)
            $('form :input').val('');
            $('#add').html('SUBMIT');
            edit = false;
            listAllStudents(listOfStudents)
        }
        
        
        // console.log("Listofstudents",listOfStudents)
    })

    // edit student
    $("tbody").on('click','#edit',function(event){
    console.log(this,$(this).data("index"));
    let index = $(this).data("index");
    populateStudentData(listOfStudents[index])
    edit = true;
    editIndex = index;
    })

    // delete student
    $("tbody").on('click','#delete',function(event){
        console.log(this,$(this).data("index"));
        let index = $(this).data("index");
        listOfStudents.splice(index,1);
        listAllStudents(listOfStudents)
        })
})


// function that takes list of students as a array and appends the students data to DOM
function listAllStudents(studentList){
    console.log(studentList)
    $("tbody").empty();
    studentList.forEach((student,i)=>{
        console.log(i,student);
        $('tbody').append("<tr><th>"+student.name+"</th><th>"+
        student.age+"</th><th>"+
        student.standard+"</th>"+
        "<th> <button class='btn btn-primary' id='delete' data-index="+i+">delete</button></th>"+
        "<th> <button class='btn btn-primary' id='edit' data-index="+i+">edit</button></th></tr>")
    })
}

// function that takes individual student data and populates to form field
function populateStudentData(student){
    console.log(student)
    $('#inputName').val(student.name)
    $('#inputAge').val(student.age);
    $('#inputStandard').val(student.standard);
    $('#add').html('UPDATE') 
}