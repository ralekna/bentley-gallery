import {beforeEach, describe, expect, it, vi} from "vitest";
import {render, type RenderResult} from "vitest-browser-react";
import {ImageViewer} from "./ImageViewer.tsx";
import type {PicsumImageData} from "../../store/types.ts";

describe("components/gallery/ImageViewer", () => {
  beforeEach(() => {
    // Mock the global window object to prevent errors during tests
    // Object.defineProperty(window, 'scrollY', {
    //   writable: true,
    //   value: 0,
    // });
    // Object.defineProperty(window, 'innerHeight', {
    //   writable: true,
    //   value: 800,
    // });
    // Object.defineProperty(document.documentElement, 'offsetHeight', {
    //   writable: true,
    //   value: 2000,
    // });
  })

  it("should render the image viewer with the correct image data", async () => {
    const imageData: PicsumImageData = {
      id: "1",
      width: 800,
      height: 600,
      url: "https://picsum.photos/id/1/800/600",
      download_url: "https://picsum.photos/id/1/400/300",
      author: "Melvins"
    }
    const onCloseMock = vi.fn();
    // const {getByText, getByRole} = render(<ImageViewer image={imageData} onClose={onCloseMock}/>);
    const screen: RenderResult = render(<ImageViewer image={imageData} onClose={onCloseMock}/>);

    // Check if the author is displayed in the figcaption
    const figcaption = screen.getByText(imageData.author);
    await expect.element(figcaption).toBeInTheDocument();

    // Check if the close button is rendered
    // const closeButton = screen.getByRole('button', {name: /×/i});
    const closeButton = screen.getByText(/×/i);
    await expect.element(closeButton).toBeInTheDocument();

    // Simulate clicking the close button
    await closeButton.click();
    expect(onCloseMock).toHaveBeenCalledTimes(1);

    // Check if the download link is rendered
    const downloadLink = screen.getByText('download');
    await expect.element(downloadLink).toHaveAttribute('href', imageData.download_url);
    await expect.element(downloadLink).toHaveAttribute('download');
    await expect.element(downloadLink).toHaveAttribute('target', '_blank');
  })

})