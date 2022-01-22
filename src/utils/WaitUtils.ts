export const waitUntilCondition = async (condition: boolean, timeout: number, errormsg: string) => {
    await browser.waitUntil(async () => condition, { timeout: timeout, timeoutMsg: errormsg })
}