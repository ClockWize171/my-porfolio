from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from django.views.generic import (
    ListView as lv, 
    DetailView as dv,
    CreateView as cv,
    UpdateView as uv,
    DeleteView as delv, 
)

def home_controller(request):
    title = 'Home'
    template_name = 'home.html'
    context = {"title": title}
    return render(request, template_name, context)

def aboutme_controller(request):
    title = 'About Me'
    template_name = 'aboutme.html'
    context = {}
    return render(request, template_name, context)

class project_controller(lv):
    model = Post
    template_name = 'project.html'

def contact_controller(request):
    title = 'Contact'
    template_name = 'contact.html'
    context = {}
    return render(request, template_name, context)
