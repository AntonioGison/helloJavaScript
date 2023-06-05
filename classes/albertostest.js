/*fammi una classe che mi rappresenti un Task per una TodoApp.
 Un task deve contenere:
  il contenuto testuale
   un check se completato
 uno status se attivo o cestinato
 */

 class task{
    constructor(taskname,content,toggleComplete,status){
        this._task = taskname;
        this._content = content;
        this._toggle = toggleComplete;
        this._status = status; //attivo cestinato
    }

    name(){
       return  this._task;
    }

    content(){
        return  this._content;
    }

    toggle(){
        if(this._toggle === true){
            return 'completato';
        }
        else{
            return 'wip';
        }
    }

    checkStatus(){
        if(this._status === 'attivo'){
            return 'attivo';
        }
        else{
            return 'cestinato';
        }
    }

    changeStatus(){
        return this._status != this._status;
    }

    changeToggle(){
        if(this._status === 'attivo'){
            return 'cestinato';
        }
        else{
            return 'attivo';
        }
    }
 }