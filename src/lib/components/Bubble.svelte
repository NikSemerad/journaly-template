<script lang="ts">
    export let date: string;
    export let content: string;

    // 0 = first and last, 1 = first, 2 = middle, 3 = last
    export let position: number;
</script>

<div class="flex flex-row gap-2">
    <div class="flex flex-col items-center gap-2 flex-shrink-0 min-w-[48px]">
        {#if position === 1}
            <div class="w-[4px] h-full mt-14 bg-zinc-100 rounded-full"></div>
        {:else if position === 2}
            <div class="w-[10px] h-[10px] bg-zinc-100 rounded-full mt-2 flex-shrink-0"></div>
            <div class="w-[4px] h-full bg-zinc-100 rounded-full"></div>
        {:else if position === 3}
            <p>🚀</p>
        {/if}
    </div>
    <div class="bubble p-6 bg-bubble mb-2 rounded-3xl w-full flex-col justify-center items-start gap-2.5 inline-flex">
        <p class="text-neutral-400 text-base leading-7">{date}</p>
        <p class="text-base leading-7 text-neutral-600">{@html content}</p>
    </div>
</div>

