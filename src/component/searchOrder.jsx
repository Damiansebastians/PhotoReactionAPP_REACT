import { React, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { sortBy } from "../features/favorite/favoriteSlice";
import { searchPhoto } from "../features/search/searchSlice";
import { sortSearch } from "../features/search/searchSlice";
import { searchFAvorite } from "../features/favorite/favoriteSlice";

function SearchOrder() {

    let [search, setSearch] = useState('')

    let dispatch = useDispatch()

    let onSort = (e) => {
        dispatch(sortBy(e.target.value))
        dispatch(sortSearch(e.target.value))
    }

    let searchAction = (ev) =>{
        setSearch(ev.target.value)
        dispatch(searchPhoto({search}))
        dispatch(searchFAvorite(search))
    }



    return (
        <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center' }}>

            <div>
                <label htmlFor="" style={{ 
                    marginRight: '25px',
                    color: '#ffffff',
                    fontSize: '20px',
                    fontWeight: 'bold' }}>Order by
                    </label>

                <select name="filter" id="" style={{
                    borderRadius: '5px',
                    padding: '2px 4px',
                    fontSize: '26px',
                    width: '150px',
                    boxShadow: '1px 1px 10px 16px #ffffff',
                    border: 'none',
                }}  
                
                onChange={(target) => {onSort(target)}}>
                    <option value="none">None</option>
                    <option value="width">Width</option>
                    <option value="height">Height</option>
                    <option value="likes">Likes</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div>

                <input onChange={(ev) => searchAction(ev)} type="text" placeholder="Search..." style={{
                    borderRadius: '5px',
                    padding: '2px 4px',
                    width: '300px',
                    fontSize: '26px',
                    color: '#000000',
                    fontWeight: 'bold',
                    boxShadow: '1px 1px 10px 16px #ffffff',
                    border: 'none',
                }} />

                <SearchIcon onClick={() => searchAction()} style={{ display: 'none' }} />
            </div>
        </div>
    );
}

export default SearchOrder