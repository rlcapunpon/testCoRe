import { Component, OnInit, Input } from '@angular/core';
import {SourceFile} from '../objects/source-file';
import {TestFile} from '../objects/test-file';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  private testPlaceHolder = "Create New File";
  private srcPlaceHolder = "Create New File";
  private sourceFiles: Array<SourceFile> = [];
  private testFiles: Array<TestFile> = [];
  private srcFilename: string;
  private testFilename: string;
  @Input('tddState') tddState : number;

  ngOnInit() {
  }

  createSourceFile(): SourceFile {
    return null;
  }

  createTestFile(): TestFile {
    return null;
  }

  createFile(type: string) : void {
    console.log("Create File triggered. ");
    if (type == "test") {
      this.testFiles.push(new TestFile(this.testFilename));
    } else if (type == "source") {
      this.sourceFiles.push(new SourceFile(this.srcFilename));
    }
  }

  changePlaceHolder(isFocused: boolean, index: number) : void {
    if (index == 0)
      this.srcPlaceHolder = isFocused ? "" : "Create New File";
    else
      this.testPlaceHolder = isFocused ? "" : "Create New File";
  }
}
