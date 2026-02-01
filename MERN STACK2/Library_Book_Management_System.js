class Book{
    title;
    author;
    pages;
    isAvailable;
    setData(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        this.isAvailable=false;
    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
     return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    isLongBook(){
        if(pages>300){
            return true;
        }
        else{
            return false;
        }
    }
}
let object1=new Book();
object1.setData("hh","xyz",300,true);
console.log(object1.getInfo());