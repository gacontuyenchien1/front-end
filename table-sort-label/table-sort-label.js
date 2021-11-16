const HEADERS_MAP_NORDER = {
    "Company": 0,
    "Contact": 1,
    "Country": 2
}

const aHeaderStatus = [0, 0, 0];
const aTHeaders = document.querySelectorAll("th");

function refreshSortIcons(){
    aTHeaders.forEach( th =>{
        let upEl = th.querySelector(".sort-up");
        upEl.style.display = "none";
        let downEl = th.querySelector(".sort-down");
        downEl.style.display = "none";
    });
}

/**
 * 
 * @param {"th" html element} thEl
 * @param {int} status. -1: up, 1: down
 */
function showSortIcon( thEl, status ){
    if ( status === -1 ){
        let upEl = thEl.querySelector(".sort-up");
        upEl.style.display = "block";
    }else if ( status === 1){
        let downEl = thEl.querySelector(".sort-down");
        downEl.style.display = "block";
    } else{
        // Do nothing
    }
}

function changeSortState( event ){
    console.log("event: ", event.target);
    let thEl = event.target;
    let thTxt = thEl.innerText;
    switch ( aHeaderStatus[HEADERS_MAP_NORDER[thTxt]]){
        case 0:
        case 1: 
            aHeaderStatus[HEADERS_MAP_NORDER[thTxt]] = -1;
            break;
        case -1:
            aHeaderStatus[HEADERS_MAP_NORDER[thTxt]] = 1;
            break;
        default:
            // Do nothing
            break;
    }

    refreshSortIcons();
    showSortIcon( thEl, aHeaderStatus[HEADERS_MAP_NORDER[thTxt]]);
}

// Add icons to the "th" Html elements
aTHeaders.forEach( th =>{
    th.style.position = "relative";
    const sortDown = `<svg class="sort-down" style="display: none; transform: rotate(180deg); position: absolute; right: 0; bottom: 2px;" width="8" height="8" fill="currentColor"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
                        </svg>`;
    th.innerHTML += sortDown;
    const sortUp = `<svg class="sort-up" style="display: none; position: absolute; right: 0; bottom: 11px;" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
    </svg>`;
    th.innerHTML += sortUp;
    th.addEventListener("click", changeSortState);
});
