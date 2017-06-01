/**
 *
 * Assessment service helps to get questions(items)
 * @class org.ekstep.services.assessmentService
 * @author Santhosh Vasabhaktula <santhosh@ilimi.in>
 */
org.ekstep.services.assessmentService = new(org.ekstep.services.iService.extend({
    /** 
     * @member {string} learningURL
     * @memberof org.ekstep.services.assessmentService
     */
    learningURL: function() {
        return this.getBaseURL() + this.getAPISlug() + '/learning/'
    },
     /** 
     * @member {object} requestHeaders
     * @memberof org.ekstep.services.assessmentService
     */
    requestHeaders: {
        "headers": {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    /**
     * Get Questions from search API
     * @param  {object}   data     search filter data
     * @param  {Function} callback returns error and response as arguments
     * @memberof org.ekstep.services.assessmentService
     */
    getQuestions: function(data, callback) {
        org.ekstep.services.searchService.search(data, callback);
    },
    /**
     * Get selected Question(assessmentitem)
     * @param  {string}   itemId   selected question(assessmentitem) id
     * @param  {Function} callback returns error and response as arguments
     * @memberof org.ekstep.services.assessmentService
     */
    getItem: function(itemId, callback) {
        this.getFromService(this.learningURL() + 'v3/assessment/assessmentitems/read/' + itemId, this.requestHeaders, callback);
    },
    /**
     * Get template data of selected question from content service API
     * @param  {string}   templateId selected question(assessmentitem) template id
     * @param  {Function} callback   returns error and response as arguments
     * @memberof org.ekstep.services.assessmentService
     */
    getTemplate: function(templateId, callback) {
        org.ekstep.services.contentService.getTemplateData(templateId, callback);
    }
}));
