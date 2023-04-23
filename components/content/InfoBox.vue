<template>
    <div>
        <p style="border: 1px solid;padding: .5rem">
            <slot />
        </p>
        <hr>
        <div class="p-10 bg-green-400">
            <slot name="namedSlot" />
        </div>
    </div>
</template>