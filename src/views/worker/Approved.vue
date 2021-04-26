<template>
    <div>
        <h3>Допущенные на территорию</h3>
        
        <ApprovedTable />
    </div>
</template>

<script>
import ApprovedTable from "@/components/worker/items/ApprovedTable"

export default {
    components: { ApprovedTable }
}
</script>