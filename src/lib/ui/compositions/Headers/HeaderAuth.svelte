<script lang="ts">
  import { clsx } from 'clsx';
  import { authStore } from '../../../data/stores/auth';
  import { isTabletDown } from '../../hooks/useMediaQuery';
  import Flex from '../../layout/Flex/Flex.svelte';
  import FlexItem from '../../layout/Flex/FlexItem.svelte';
  import Avatar from '../../primitives/Avatar/Avatar.svelte';
  import AvatarBlock from '../../primitives/Avatar/AvatarBlock.svelte';
  import Button from '../../primitives/Button/Button.svelte';
  import ButtonGroup from '../../primitives/Button/ButtonGroup.svelte';
  import Dialog from '../../primitives/Dialog/Dialog.svelte';
  import DialogModal from '../../primitives/Dialog/DialogModal.svelte';
  import IconButton from '../../primitives/IconButton/IconButton.svelte';
  import Label from '../../primitives/Fieldset/Label.svelte';
  import Logo from '../../primitives/Logo/Logo.svelte';
  import Menu from '../../primitives/Menu/Menu.svelte';
  import MenuItem from '../../primitives/Menu/MenuItem.svelte';
  import MenuPopover from '../../primitives/Menu/MenuPopover.svelte';
  import MenuTrigger from '../../primitives/Menu/MenuTrigger.svelte';
  import Navigation from '../../primitives/Navigation/Navigation.svelte';
  import NavigationPill from '../../primitives/Navigation/NavigationPill.svelte';
  import IconChevronDown from '../../icons/IconChevronDown.svelte';
  import IconMenu from '../../icons/IconMenu.svelte';
  import IconX from '../../icons/IconX.svelte';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './headers.css';

  const { user } = authStore;

  let open = $state(false);
  let page = $state('pricing');

  const navItems = [
    'Pricing',
    'Solutions',
    'Community',
    'Resources',
    'Contact',
  ];

  function handleLogin() {
    authStore.login({
      email: 'Charlie Brown',
      password: 'snooptroupe',
    });
  }
</script>

<Flex
  direction="column"
  gap="300"
  alignPrimary="center"
  alignSecondary="center"
>
  <FlexItem>
    {#if $isTabletDown}
      <Flex alignPrimary="center">
        <IconButton
          variant="subtle"
          aria-label="Toggle navigation menu"
          onclick={() => { open = true; }}
        >
          <IconMenu />
        </IconButton>
        <DialogModal isOpen={open}>
          <Dialog class={clsx('navigation-dialog')}>
            <IconButton
              class={clsx('navigation-dialog-close')}
              variant="subtle"
              aria-label="Close navigation menu"
              onclick={() => { open = false; }}
            >
              <IconX />
            </IconButton>
            <Flex
              direction="column"
              alignPrimary="space-between"
              alignSecondary="center"
            >
              <Navigation direction="column">
                {#each navItems as item}
                  <NavigationPill
                    onclick={() => { page = item.toLowerCase(); }}
                    isSelected={page === item.toLowerCase()}
                  >
                    {item}
                  </NavigationPill>
                {/each}
              </Navigation>
              {#if $user}
                <Flex alignSecondary="center" gap="200" direction="column">
                  <FlexItem>
                    <Flex alignPrimary="center">
                      <Avatar
                        src={$user.avatar}
                        initials={$user.name.charAt(0)}
                      />
                    </Flex>
                  </FlexItem>
                  <FlexItem>
                    <Flex alignPrimary="center">
                      <Label>{$user.name}</Label>
                    </Flex>
                  </FlexItem>
                  <FlexItem>
                    <Flex alignPrimary="center">
                      <Button
                        variant="subtle"
                        size="small"
                        onclick={() => authStore.logout()}
                      >
                        Log out
                      </Button>
                    </Flex>
                  </FlexItem>
                </Flex>
              {:else}
                <ButtonGroup align="center">
                  <Button
                    variant="subtle"
                    size="small"
                    onclick={handleLogin}
                  >
                    Log in
                  </Button>
                  <Button
                    size="small"
                    onclick={handleLogin}
                  >
                    Register
                  </Button>
                </ButtonGroup>
              {/if}
            </Flex>
          </Dialog>
        </DialogModal>
      </Flex>
    {:else}
      <Flex gap="400" alignSecondary="center">
        <Navigation direction="row">
          {#each navItems as item}
            <NavigationPill
              onclick={() => { page = item.toLowerCase(); }}
              isSelected={page === item.toLowerCase()}
            >
              {item}
            </NavigationPill>
          {/each}
        </Navigation>
        {#if $user}
          <MenuTrigger>
            <AnchorOrButton class={clsx('header-auth-avatar-button')}>
              <Avatar src={$user.avatar} initials={$user.name.charAt(0)} />
              <IconChevronDown />
            </AnchorOrButton>
            <MenuPopover placement="bottom right">
              <Menu>
                <MenuItem>
                  <AvatarBlock title={$user.name} description="View profile">
                    <Avatar
                      src={$user.avatar}
                      initials={$user.name.charAt(0)}
                    />
                  </AvatarBlock>
                </MenuItem>
                <MenuItem onclick={() => authStore.logout()}>Log out</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        {:else}
          <ButtonGroup class={clsx('header-auth-avatar-button')}>
            <Button
              variant="subtle"
              size="small"
              onclick={handleLogin}
            >
              Log in
            </Button>
            <Button
              size="small"
              onclick={handleLogin}
            >
              Register
            </Button>
          </ButtonGroup>
        {/if}
      </Flex>
    {/if}
  </FlexItem>
</Flex>
