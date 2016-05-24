var Student = require('./modelo/student');
var Subject = require('./modelo/subject');



exports.getStudent = function (req, res){
	Student.find(
		function(err, student) {
			if (err)
				res.send(err)
					res.json(student); 		
				}
			);
}


exports.getStudentByID = function (req, res){
Student.findOne({_id: req.params.student_id},
		function(err, student) {
			if (err)
				res.send(err)
					res.json(student); 		
				}
			);
}

exports.getSubject = function (req, res){
	Subject.find(
		function(err, subject) {
			if (err)
				res.send(err)
					res.json(subject); 		
				}
			);
}



exports.setStudent = function(req, res) {

		Student.create(
			{name : req.body.name,	address: req.body.address, phone:{ home:req.body.phone.home, work:req.body.phone.work}}, 
			function(err, student) {
				if (err)
					res.send(err);
                
                Student.find(function(err, student) {
				if (err)
					res.send(err)
				res.json(student);
			});
                
                
               
});

	}

exports.setSubject = function(req, res) {

		Subject.create(
			{name : req.body.name }, 
			function(err, subject) {
				if (err)
					res.send(err);
                
                
              Subject.find(function(err, subject) {
				if (err)
					res.send(err)
				res.json(subject);
			});
});

	}


exports.updateStudent = function(req, res){
	Student.update( {_id : req.params.student_id},
					{$set:{name : req.body.name,	address: req.body.address, phone:{home:req.body.phone.home, work:req.body.phone.work}}}, 
					function(err, student) {
						if (err)
							res.send(err);

			});
	}


exports.updateSubject = function(req, res){
    console.log(req.params);
    
     console.log(req.body.students);
    
    Student.findOne({name: req.body.students}, function (err, student){
	    
        if (err) res.send(err);
        else if (student == null){
  
        console.log("Student doesn't exists");
        res.send("error");}
    
                    
    else{
                    
             
    Subject.findOne( {_id : req.params.subject_id}, 
					function(err, subject) {
                        if(subject==undefined)
                            {
                                res.send("no encontrado");
                            }
        
                    else if (err){
							res.send(err);}
                    else{
                        subject.students.push(student._id);
                        subject.save();
                        res.json(subject);
                    }

			});
	}  
    }

); } 




     
     	
	



exports.removeStudent = function(req, res) {
	Student.remove({_id : req.params.student_id}, function(err, student) {
		if (err) 
			res.send(err);
        
         Student.find(function(err, student) {
				if (err)
					res.send(err)
				res.json(student);
			});
                
                
               
});
}


exports.removeSubject = function(req, res) {
	Subject.remove({_id : req.params.subject_id}, function(err, subject) {
		if (err)
			res.send(err);
        
        Subject.find(function(err, subject) {
				if (err)
					res.send(err)
				res.json(subject);
			});
});
}