let AddList = document.querySelector('.Add-list');
let SideBarList = document.querySelector('.SideBar-List');




function Add(e){
    if(e.key === 'Enter'){
        let ul = document.createElement('ul');
        let h2 = document.createElement('h2');
        let title = document.createTextNode(AddList.value);

        h2.appendChild(title);
        ul.append(h2)
        SideBarList.append(ul);
////////////////////////////////////////////////////////
        let Menu__ul = document.createElement('div');
        let Menu__point = document.createElement('div');
        let Menu__item = document.createElement('div');

        let Menu__item_rename = document.createElement('div');
        let Menu__item_delete = document.createElement('div');

        Menu__ul.className = 'Menu__ul';
        Menu__point.className = 'Menu__point';


        Menu__item.className = 'Menu__item';
        Menu__item_rename.className = 'Menu__item-rename';
        Menu__item_delete.className = 'Menu__item-delete';
        
        
        


        // point.array.forEach((point) => {
            
            
        // });


        //Menu__ul.append(Menu__item);
        // Menu__item.append(Menu__item_delete);
        // Menu__item.append(Menu__item_rename);

        SideBarList.append(Menu__ul);

    }
}


AddList.addEventListener('keydown',Add);