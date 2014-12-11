module BlockHelper
  def blocktoc(*args)
    partial :blocktoc, { :blocks => args }
  end

  def block(name)
    haml_concat("<div id=\"block-#{name.to_s}\" class=\"blockcontainer\">")
#     haml_concat(partial(:blockheader, { :name => name }))
    yield
    haml_concat('</div>')
  end

  def blocks(*args)
    @toc = blocktoc(*args)
    ret = ""
    args.each do |block|
      if block_given?
        ret += yield(partial(block))
      else
        ret += partial(block)
      end
    end
    ret
  end
end

self.extend BlockHelper
