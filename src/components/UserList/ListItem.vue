<template>
    <div className="user-list__item">
        <div className="user-list__data">
            <div className="user-list__info">
                <div className="user-list__item-title">Name:</div>
                <div className="user-list__text">{{item.name}}</div>
            </div>
            <div className="user-list__info">
                <div className="user-list__item-title">City:</div>
                <div className="user-list__text">{{item.address.city}}</div>
            </div>
            <div className="user-list__info">
                <div className="user-list__item-title">Company:</div>
                <div className="user-list__text">{{item.company.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: ['item']
    }
</script>

<style>
    .user-list__data {
        display: flex;
        flex-direction: column;
        row-gap: 3px;
    }

    .user-list__info {
        display: flex;
    }

    .user-list__item-title {
        box-sizing: border-box;
        width: 90px;
        font-weight: 500;
    }
</style>
