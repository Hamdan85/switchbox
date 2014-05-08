# Switchbox

An awesome plugin that extends Rails FormBuilder making the boolean fields looks like an awesome animated switch.
It's switchable, It's draggable, It's switchbox.

## Installation

Add this line to your application's Gemfile:

    gem 'switchbox'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install switchbox

Add this to application.js

    //= require switch_rails

And add this to application.css

    *= require switch_rails

## Usage

Instead of:

    <%= f.check_box :boolean_field %>

Use:

    <%= f.switch_box :boolean_field %>

##customization

To override your switch use:

 outterSwitch' class to modify the outer container

 'innerSwitch class to modify the inner switch

 The first div with 'content' class will be the left option, and the seccond will be the right option.

 #known bugs

 You cannot edit the width of the switch yet or the texts inside the 'content' divs.  Ill release this fix really soon.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
