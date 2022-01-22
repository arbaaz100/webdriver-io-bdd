import BasePage from "../../BasePage"

class BenifitsAndExtrasPage extends BasePage {

    get addTerminationDate() { return $("//button[@data-qa='add-a-termination-date']") }
    get changeNoticePeriod() { return $("//button[@data-qa='change-days-of-notice']") }
    get offerStockOption() { return $("//button[@data-qa='offer-stock-options']") }
    get addDocuments() { return $("//button[@data-qa='attach']") }
    get addSpecialClause() { return $("//button[@data-qa='add-a-special-clause']") }
    get specialClauseTextArea() { return $("//textarea") }
}
export default new BenifitsAndExtrasPage()