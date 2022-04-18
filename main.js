 student_name=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    
    student_name.push(name1);
    student_name.push(name2);
    student_name.push(name3);
    student_name.push(name4);
    document.getElementById("names").innerHTML=student_name;
}