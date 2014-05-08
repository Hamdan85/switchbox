require "switchbox/version"

module Switchbox
  class Engine < ::Rails::Engine
  end
  class ActionView::Helpers::FormBuilder
    def switch_box(object_name, value = 1, options = {})

      if @object[object_name] == true
        value = 1
        checktag = @template.tag(:input, :type => 'checkbox', :id => "#{@object_name}_#{object_name}", :name => "#{@object_name}[#{object_name}]", :checked => 'true', :value => value, :style => objectify_options(@options), :data => {switch: ''})
      else
        value = 0
        checktag = @template.tag(:input, :type => 'checkbox', :id => "#{@object_name}_#{object_name}", :name => "#{@object_name}[#{object_name}]", :value => value, :style => objectify_options(@options), :data => {switch: ''})
      end

      @options[:visibility] = 'hidden!important'
      @template.content_tag(:div,
                            @template.tag(:input, :type => 'hidden', :name => "#{@object_name}[#{object_name}]", :value => value) + checktag
      )
    end
  end
end
