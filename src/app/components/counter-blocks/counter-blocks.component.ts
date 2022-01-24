import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter-blocks',
  templateUrl: './counter-blocks.component.html',
  styleUrls: ['./counter-blocks.component.scss']
})
export class CounterBlocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //this is a variable that hold number
    projectcount:number = 800;
    //same process
    clientcount:number = 0;
  
    //we have created setinterval function with arrow function and
    //and set them in a variable that is projectcountstop.
    projectcountstop:any = setInterval(()=>{
      this.projectcount++;
      //we need to stop this at  particular point; will use if condition
      if(this.projectcount ==1200)
      {
        //clearinterval will stop tha function
        clearInterval(this.projectcountstop);
      }
  
    },0.05) //10 is milisecond you can control it
  
  
    clientcountstop:any = setInterval(()=>{
      this.clientcount++;
      if(this.clientcount == 6)
      {
        
        clearInterval(this.clientcountstop);
      }
    },200)
  

}
