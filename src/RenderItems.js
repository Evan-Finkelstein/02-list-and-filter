import React, { Component } from 'react'
// import Data from 'Data.js'
import Item from './Item.js'



export default class RenderItems extends Component {
    state = {
        filter: ''
    }

    keySet = [...new Set(this.props.Data.map(item => item.keyword))]
    hornSet = [...new Set(this.props.Data.map(item => item.horns))]


    handleChange = e => {
        this.setState({
            filter: e.target.value,

        });
    }
    render() {

        const filteredAnimals = this.props.Data.filter((animal) => {
            if (!this.state.filter) return true;


            if (animal.keyword === this.state.filter || animal.horns === +this.state.filter) return true;



            return false
        })
        return (

            <>
                <h1>
                    <select onChange={this.handleChange}>
                        <option value=''>Show All</option>
                        {this.keySet.map(option =>
                            <option value={option}>{option}</option>)}
                        {this.hornSet.map(option =>
                            <option value={option}>{option} horns</option>)}

                    </select></h1>

                {/* {/* <p className='drop'>
                    <select onChange={this.handleChange} >
                        <option value=''>Show All</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='dragon'>Dragon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>Unilego</option>
                        <option value='1' type='number'>1 horn</option>
                        <option value='2'>2 horns</option>
                        <option value='3'>3 horns</option>
                        <option value='100'>100 horns</option>
                    </select>
                </p> */}






                {
                    filteredAnimals.map(animal =>
                        <Item
                            url={animal.url}
                            title={animal.title}
                            description={animal.description}
                            keyword={animal.keyword}
                            horns={animal.horns}

                        />)
                }
            </>
        )
    }
}
