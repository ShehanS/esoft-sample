import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('div1') div1: ElementRef;


  public loginForm: FormGroup;
  public errorMessage;

  constructor(private fb: FormBuilder, private router: Router, private render: Renderer2) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if ((this.loginForm.value.username == 'shehan') && (this.loginForm.value.password == '123')) {
      this.router.navigateByUrl('/tabs/tab3', { replaceUrl: true })
    } else {
      this.errorMessage = "login error"
    }

  }

  style1() {
    this.render.setAttribute(this.div1.nativeElement, 'class', 'style1');
  }

  style2() {
    this.render.setAttribute(this.div1.nativeElement, 'class', 'style2');
  }

}
