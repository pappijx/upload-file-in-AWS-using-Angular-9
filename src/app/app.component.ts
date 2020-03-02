import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    selectedFiles: FileList;
    
    constructor(private uploadService: UploadService) { }
    
    ngOnInit() {
    }
    
    upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
    }
    
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }
      
}
