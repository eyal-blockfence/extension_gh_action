import React from 'react';
import { Collapsable } from './Collapsable';
import { UilLamp } from '@iconscout/react-unicons';

export const Normal = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<UilLamp />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);

export const Multiple = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight' icon={<UilLamp />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);
