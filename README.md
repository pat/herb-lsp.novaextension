The **Herb LSP Extension** integrates with the [Herb Language Server](https://herb-tools.dev), with advanced configuration options to manage PATHs, as well as the ability to auto-format ERB documents when they're saved.

## Requirements

You will need [the Herb Language Server](https://herb-tools.dev/) installed on your machine (v0.4.3 or newer), and the appropriate path (or paths) configured.

## Configuration

There is two settings available to configure, which can be managed both at a global level, and at a project/workspace level.

* Set additional PATH directories to reliably detect the `herb-language-server` executable.
* Auto-formatting of ERB files when they're saved.

To configure global preferences, open **Extensions → Extension Library...** then select Herb LSP's **Preferences** tab.

You can also configure preferences on a per-project basis in **Project → Project Settings...**

Currently on my own machine, I am using `mise` to manage Node versions, so I have the following path added to the extension settings:

```
/Users/[username]/.local/share/mise/shims
```

## Usage

Ideally, the LSP should just run in the background and provide help where it can (to the best of Nova's abilities). Sometimes it can crash, though - so there is a command to restart the LSP via the command palette: `Restart Herb LSP`

### Credits

I have learned a great deal from the code Ruby LSP extensions:

* https://github.com/edwardloveall/ruby-lsp.novaextension for the format-on-save functionality
* https://github.com/Roguelazer/ruby-lsp.novaextension/ for using the ruby-lsp gem
* https://github.com/tdegrunt/ruby.novaextension for general Ruby LSP integration

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/pat/herb-lsp.novaextension. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/pat/herb-lsp.novaextension/blob/main/CODE_OF_CONDUCT.md).

## License

The extension is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in this extension's codebase, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/pat/herb-lsp.novaextension/blob/main/CODE_OF_CONDUCT.md).
