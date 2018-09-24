import React, { Component } from 'react'

import connect from '../helpers/connect'

import ContractCard from './ContractCard'

class ProjectContracts extends Component {
  render () {
    let content
    if (this.props.contracts.length > 0) {
      content = this.props.contracts.map((contract) => {
        return <ContractCard
          name={contract.contractName}
          address={contract.address || ""}
          txCount={contract.transactions ? contract.transactions.length : 0}
          projectIndex={this.props.projectIndex}
          key={"contract-" + contract.contractName}
        />
      })
    }
    else {
      content =
        <div className="Waiting">
          No Contracts
        </div>
    }

    return (
      <div className="ProjectContracts">
        { content }
      </div>
    )
  }
}

export default connect(ProjectContracts)