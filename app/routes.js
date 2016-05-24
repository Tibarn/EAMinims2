var Student = require('./modelo/student');
var Subject = require('./modelo/subject');
var Controller = require ('./controller');

    module.exports = function(app) {


	app.get('/api/student', Controller.getStudent);
	app.get('/api/student/:student_id', Controller.getStudentByID);
	app.post('/api/student', Controller.setStudent);
	
	app.put('/api/student/:student_id', Controller.updateStudent);

	app.delete('/api/student/:student_id', Controller.removeStudent);
    
    
    app.get('/api/subject', Controller.getSubject);
	app.post('/api/subject', Controller.setSubject);
    app.post('/api/subject/:subject_id', Controller.updateSubject);
    app.delete('/api/subject/:subject_id', Controller.removeSubject);
    

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};