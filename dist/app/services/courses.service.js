"use strict";
var CoursesService = (function () {
    function CoursesService() {
    }
    CoursesService.prototype.getCourses = function () {
        return ["Course 1", "Course 2", "Course 3"];
    };
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map