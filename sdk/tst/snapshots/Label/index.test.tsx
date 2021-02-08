


describe('Label', () => {
  it('label', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-label--basic-label'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
