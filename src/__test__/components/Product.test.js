import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import Product from '../../components/Product'
import ProductMock from '../../__mocks__/productMock'

describe('<Product />', () => {

    test('Render del componente Product', () => {

        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>,
        )
        expect(product.length).toEqual(1)
    })
    test('Comprobar el boton de comprar', () => {
        const handleAddToCard = jest.fn()
        const wrapper = mount(
            <ProviderMock>
                <Product 
                    product={ProductMock}
                    handleAddToCart={handleAddToCard}
                
                />
            </ProviderMock>
        )
        wrapper.find('button').simulate('click')
        expect(handleAddToCard).toHaveBeenCalledTimes(1)
    })
})

