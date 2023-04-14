import { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        const {onChangeHandler, PlaceHolder, ClassName} = this.props;
        return (
            <input
                className='search-box ${ClassName}'
                type = 'search'
                placeholder = {PlaceHolder}
                onChange = {onChangeHandler}
            />
        )
    }
}

export default SearchBox;