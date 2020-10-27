import React, { Component } from 'react'
import Data from './Data.js'
import Item from './Item.js'

export default class RenderItems extends Component {
    render() {
        return (
            <>
                <p>
                    <select>
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

                    </select>
                </p>
                {
                    Data.map(animal =>
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
