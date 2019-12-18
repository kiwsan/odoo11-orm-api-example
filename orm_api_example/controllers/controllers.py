# -*- coding: utf-8 -*-
from odoo import http

# class OrmApiExample(http.Controller):
#     @http.route('/orm_api_example/orm_api_example/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/orm_api_example/orm_api_example/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('orm_api_example.listing', {
#             'root': '/orm_api_example/orm_api_example',
#             'objects': http.request.env['orm_api_example.orm_api_example'].search([]),
#         })

#     @http.route('/orm_api_example/orm_api_example/objects/<model("orm_api_example.orm_api_example"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('orm_api_example.object', {
#             'object': obj
#         })