import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hobbyList:Array<string> = ["篮球","足球","羽毛球"];
  private selectHobby:Array<string> = [];

  selectCheckbox(check:boolean,value:string){
    var index:number = this.selectHobby.indexOf(value);
    //当前选择的就追加否则就移除
    if(check){
      if(index < 0){
        this.selectHobby.push(value);
      }
    }else{
      if(index > -1){
        this.selectHobby = this.selectHobby.filter((ele,index)=>{
          return ele != value;
        })
      }
    }
    //this.dictionaryForm.value["hobby"] = this.selectHobby.toString();
   console.log(this.selectHobby)
  }

submitForm(){

}

}
