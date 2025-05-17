import { Mutex } from 'async-mutex';


export class DmartCheckout{
    
    private checkOutQueue: number[][]
    private itemTotal: number[]
    private mutex: Mutex  
    
    constructor(maxCheckOutCounter: number){
       if (maxCheckOutCounter > 10)
         throw new Error('Max counters can be 10')
       this.checkOutQueue = []  
       this.itemTotal = [] 
       this.mutex = new Mutex();
       //set the initial queue details
       for(let i = 0 ;i < maxCheckOutCounter; i++){
             this.checkOutQueue.push([])
             this.itemTotal.push(0)
       }
      
    }
     
     /* Function assigns counter to customer based on the item present in the counter queue 
        (New item is assigned to the counter which has the lowest no.of items of all the counter)*/
    public async assignQueueToCustomer(itemCount: number){
     await this.mutex.runExclusive(async () => {
        let minValIndex = 0 
        let minValue = this.itemTotal[0]

        for(let i = 0 ; i < this.itemTotal.length; i++){
            if(this.itemTotal[i] < minValue){
               minValIndex = i;
               minValue = this.itemTotal[i]
            } 
        }
         this.checkOutQueue[minValIndex].push(itemCount);      
         this.itemTotal[minValIndex] += itemCount; 
     })
    }
    
    //function is used to return the details needed to display on ui
    public getQueueData(): { items: number[]; total: number }[] {
      return this.checkOutQueue.map((queue, i) => ({
        items: queue,
        total: this.itemTotal[i],
      }));
    }
    
 }
 



