<template>
    <div>
        <h3>Заявки на инструктаж</h3>
        
        <InstructTable class="mt-2"/>
    </div>
</template>

<script>
import InstructTable from "@/components/worker/items/InstructTable"
export default {
    components: { InstructTable },
};
</script>