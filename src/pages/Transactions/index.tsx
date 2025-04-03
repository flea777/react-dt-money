import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles' 

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant='income'>
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>03/04/2025</td>
            </tr>

            <tr>
              <td width="50%">Jantar</td>
              <td>
                <PriceHighlight variant='outcome'>
                  - R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>28/03/2025</td>
            </tr>

            <tr>
              <td width="50%">Almoço</td>
              <td>
                <PriceHighlight variant='outcome'>
                  - R$ 128,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>25/03/2025</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
