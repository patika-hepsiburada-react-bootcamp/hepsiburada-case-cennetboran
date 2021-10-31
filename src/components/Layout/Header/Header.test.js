import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainContext } from "./../../Context/Context";
import Header from "./Header";

describe("function called on click", () => {
  let basketEnter, basketContainer, basketLeave, iPhone11, iPhone11RedCase;
  const mockValue = {
    basketItems: [
      {
        productId: 3,
        desc: "iPhone 11 Kırmızı Kılıf",
        brand: "Apple",
        color: "Kırmızı",
        image: "images/productImages/image 3.png",
        price: "127,85",
        actualPrice: "124,00",
        sale: "12%",
      },
      {
        productId: 2,
        desc: "Apple iPhone 11",
        brand: "Apple",
        color: "Sarı",
        image: "images/productImages/image 2.png",
        price: "800,85",
        actualPrice: "900,00",
        sale: "2%",
      },
    ],
    removeFromCart: jest.fn(),
    isBasketVisible: jest.mock,
    setIsBasketVisible: jest.fn(),
    setSortOption: jest.fn(),
    items: jest.mock,
    setItems: jest.fn(),
    isModalOpen: jest.mock,
    setIsModalOpen: jest.fn(),
    itemIndex: jest.mock,
    setItemIndex: jest.fn(),
  };

  beforeEach(() => {
    render(
      <MainContext.Provider value={mockValue}>
        <Header />
      </MainContext.Provider>
    );
  });

  it("viewcheck", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
