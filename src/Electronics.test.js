import React from "react";
import { ReactDOM } from "react";
import Electronics from './Electronics'

import {render, screen,fireEvent} from '@testing-library/react'

it("renders changed",()=>{
    const { container } = render(<Electronics />);

    const productbutton  = screen.getByTestId(container, "productbutton");

    const infobutton = screen. getByTestId(container, "infobutton");

    fireEvent.click(infobutton);
    expect(productbutton.textContent).toBe("0");

})