<script lang="ts">
  import { clsx } from 'clsx';
  import '../Button/button.css';
  import './pagination.css';

  let {
    href,
    children,
    current = false,
  }: {
    href: string;
    children: string;
    current?: boolean;
  } = $props();
</script>

<a
  {href}
  aria-label={`Page ${children}`}
  aria-current={current ? 'page' : undefined}
  class={clsx('button', current ? 'button-variant-primary' : 'button-variant-subtle', 'button-size-medium')}
>
  <span>{children}</span>
</a>
